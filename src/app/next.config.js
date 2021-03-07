// code from https://github.com/pd-smith/next-express-babel #Start

module.exports = {
    webpack: (config, { defaultLoaders }) => {
        defaultLoaders.babel.options.envName = config.name
        return config
    }, distDir: '../../dist/app'
}

// code from https://github.com/pd-smith/next-express-babel #End