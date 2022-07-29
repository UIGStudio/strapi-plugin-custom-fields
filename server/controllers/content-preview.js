'use strict';

const pluginId = require('../../admin/src/pluginId');

module.exports = {
    async config(ctx) {
        console.log(pluginId);
        ctx.body = await strapi.plugin(pluginId).service('config-service').getConfig();
    },
};
