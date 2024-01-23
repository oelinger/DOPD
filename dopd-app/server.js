// server.js
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use('/api/proxy', async (req, res) => {
    try {
        const { url, method, headers, data } = req.body;

        // Check if the request is for an image
        const isImageRequest = /\.(jpg|jpeg|png|gif|webp)$/i.test(path.extname(url));

        const response = await axios({
            method: method || 'get',
            url,
            headers,
            data,
            responseType: isImageRequest ? 'arraybuffer' : 'json', // Set response type based on content type
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
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
