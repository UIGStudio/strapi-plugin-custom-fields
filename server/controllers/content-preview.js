'use strict';

const pluginId = require('../../admin/src/pluginId');

module.exports = {
    async config(ctx) {
        ctx.body = await strapi.plugin(pluginId).service('config-service').getConfig();
    },
};
