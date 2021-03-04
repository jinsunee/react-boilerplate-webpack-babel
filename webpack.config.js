
const argv = require('yargs').argv;

module.exports = () => {
    return require(`./config/${argv.env}.js`);
};
