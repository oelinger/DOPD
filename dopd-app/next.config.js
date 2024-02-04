/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'r2.oelinger.at',
                port: '',
                pathname: '/(.*)',
            },
        ],
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }
        return config;
    },
    async rewrites() {
        return [
            {
                source: '/',
                destination: 'https://r2.oelinger.at',
            },
        ];
    },
};

module.exports = nextConfig;

const stylexPlugin = require('@stylexjs/nextjs-plugin');
const babelrc = require('./.babelrc.js');
const plugins = babelrc.plugins;
const [_name, options] = plugins.find((plugin) => Array.isArray(plugin) && plugin[0] === '@stylexjs/babel-plugin');
const rootDir = options.unstable_moduleResolution.rootDir ?? __dirname;

module.exports = stylexPlugin({
    rootDir,
    useCSSLayers: true,
})({});
