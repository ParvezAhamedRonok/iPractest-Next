/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'randomuser.me',
            'images.unsplash.com',
            'images.pexels.com',
            'flagcdn.com'
        ], // Allow 'randomuser.me' and 'images.unsplash.com' for next/image
    },
    webpack: (config, { isServer }) => {
        // PDF Loader
        config.module.rules.push({
            test: /\.pdf$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: 'static/files/', // Where to output the PDF files
                        publicPath: '/_next/static/files/', // The path to access the files in your app
                    },
                },
            ],
        });

        // Audio Loader (for .wav files)
        config.module.rules.push({
            test: /\.(mp3|wav)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: 'static/audio/', // Where to output audio files
                        publicPath: '/_next/static/audio/', // Public path to access audio
                    },
                },
            ],
        });

        return config;
    },
};

export default nextConfig;




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: [
//             'randomuser.me',
//             'images.unsplash.com',
            
//         ], // Allow 'randomuser.me' for next/image
//     },
//     webpack: (config, { isServer }) => {
//         config.module.rules.push({
//             test: /\.pdf$/,
//             use: [
//                 {
//                     loader: 'file-loader',
//                     options: {
//                         name: '[path][name].[ext]',
//                         outputPath: 'static/files/', // Where to output the PDF files
//                         publicPath: '/_next/static/files/', // The path to access the files in your app
//                     },
//                 },
//             ],
//         });

//         return config;
//     },
// };

// export default nextConfig;
