const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@root': path.resolve(__dirname, 'src'),
            '@common': path.resolve(__dirname, 'src/common'),
            '@modules': path.resolve(__dirname, 'src/modules')
        },
    },
    typescript: {
        enableTypeChecking: false // Disable type checking during build
    }

}