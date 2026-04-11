// next.config.mjs
import type { NextConfig } from 'next'
const path = require('path')

const nextConfig: NextConfig = {
    output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: './build', // Changes the build output directory to `./build`.
    turbopack: {
        root: path.join(__dirname, '..'),
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
};

export default nextConfig;