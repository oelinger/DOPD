// server.js
const express = require('express');
const axios = require('axios');
const path = require('path');
const net = require('net');

const app = express();
const port = process.env.PORT || 3001;
const allowedProxyHosts = new Set((process.env.ALLOWED_PROXY_HOSTS || 'r2.oelinger.at').split(',').map((host) => host.trim().toLowerCase()).filter(Boolean));
const allowedMethods = new Set(['get', 'head', 'post', 'put', 'patch', 'delete']);

app.use(express.json({ limit: '1mb' }));

const isRestrictedIp = (hostname) => {
    const ipVersion = net.isIP(hostname);
    if (!ipVersion) {
        return false;
    }

    if (hostname === '127.0.0.1' || hostname === '::1') {
        return true;
    }

    if (ipVersion === 6) {
        const normalized = hostname.toLowerCase();
        return normalized.startsWith('fc') ||
            normalized.startsWith('fd') ||
            /^fe[89ab]/.test(normalized);
    }

    return hostname.startsWith('0.') ||
        hostname.startsWith('10.') ||
        /^100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\./.test(hostname) ||
        hostname.startsWith('192.168.') ||
        /^172\.(1[6-9]|2\d|3[0-1])\./.test(hostname) ||
        hostname.startsWith('169.254.') ||
        /^22[4-9]\./.test(hostname) ||
        /^23\d\./.test(hostname) ||
        /^24\d\./.test(hostname) ||
        /^25[0-5]\./.test(hostname);
};

app.use('/api/proxy', async (req, res) => {
    try {
        if (!req.body || typeof req.body.url !== 'string') {
            return res.status(400).json({ error: 'Invalid request body' });
        }

        const { url, method, headers, data } = req.body;
        const targetUrl = new URL(url);
        const targetHostname = targetUrl.hostname.toLowerCase();
        const proxyMethod = String(method || 'get').toLowerCase();

        if (targetUrl.protocol !== 'https:') {
            return res.status(400).json({ error: 'Unsupported protocol' });
        }

        if (targetUrl.port && targetUrl.port !== '443') {
            return res.status(400).json({ error: 'Unsupported port' });
        }

        const safeHostname = Array.from(allowedProxyHosts).find((host) => host === targetHostname);
        if (isRestrictedIp(targetHostname) || !safeHostname) {
            return res.status(403).json({ error: 'Forbidden host' });
        }

        if (!allowedMethods.has(proxyMethod)) {
            return res.status(405).json({ error: 'Unsupported method' });
        }

        const forwardedHeaders = {};
        if (headers && typeof headers === 'object') {
            for (const [key, value] of Object.entries(headers)) {
                const lowerKey = key.toLowerCase();
                if (['content-type', 'accept'].includes(lowerKey) && typeof value === 'string' && !/[\r\n]/.test(value)) {
                    forwardedHeaders[key] = value;
                }
            }
        }

        // Check if the request is for an image
        const isImageRequest = /\.(jpg|jpeg|png|gif|webp)$/i.test(path.extname(targetUrl.pathname));

        const safeOrigin = `https://${safeHostname}`;
        const safePath = `${targetUrl.pathname}${targetUrl.search}`;
        const response = await axios({
            method: proxyMethod,
            baseURL: safeOrigin,
            url: safePath,
            headers: forwardedHeaders,
            data,
            responseType: isImageRequest ? 'arraybuffer' : 'json', // Set response type based on content type
            timeout: 8000,
            maxContentLength: 10 * 1024 * 1024,
        });

        if (isImageRequest) {
            // If it's an image request, set the content type and send the buffer
            res.setHeader('Content-Type', response.headers['content-type']);
            res.send(Buffer.from(response.data, 'binary'));
        } else {
            // For other requests, send JSON data
            res.status(response.status).json(response.data);
        }
    } catch (error) {
        if (error instanceof TypeError) {
            return res.status(400).json({ error: 'Invalid URL' });
        }

        if (axios.isAxiosError(error) && error.response) {
            return res.status(error.response.status).json(error.response.data);
        }

        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
