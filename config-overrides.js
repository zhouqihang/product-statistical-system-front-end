const { injectBabelPlugin } = require('react-app-rewired');
const rewired = require('react-app-rewired');
const rewireSass = require('react-app-rewire-sass');

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
    const cssLoader = rewired.getLoader(
        config.module.rules,
        rule => rule.test && String(rule.test) === String(/\.css$/)
    );

    const sassLoader = {
        test: /\.scss$/,
        use: [...(cssLoader.loader || cssLoader.use), 'sass-loader']
    };

    const oneOf = config.module.rules.find(rule => rule.oneOf).oneOf;
    oneOf.unshift(sassLoader);
    return config;
};