const pluginPkg = require('../../package.json');

const pluginId = pluginPkg.name.replace(
    /^(@[\w-]+\/|strapi-)(strapi-)?plugin-/i,
    '',
);

module.exports = pluginId;
