// code from https://github.com/pd-smith/next-express-babel #Start
const { join } = require('path');

module.exports = {
    webpack: (config, { defaultLoaders }) => {
        defaultLoaders.babel.options.envName = config.name
        return config
    }, distDir: join('..', '..', 'dist', 'app')
}

// code from https://github.com/pd-smith/next-express-babel #End