'use strict';

const pluginId = require('../../admin/src/pluginId');

module.exports = ({strapi}) => ({
    getConfig() {
        return ['namespaces', 'previewUrl', 'autoSave'].reduce(
            (prev, key) => ({
                ...prev,
                [key]: strapi.plugin(pluginId).config(key),
            }),
            {},
        );
    },
});
