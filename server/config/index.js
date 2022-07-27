'use strict';
const {ValidationError} = require('@strapi/utils').errors;

module.exports = {
    default: {},
    validator: config => {
        if (!config.namespaces) {
            throw new ValidationError('Must define namespaces.');
        }

        if (!config.previewUrl) {
            throw new ValidationError('Must define previewUrl');
        }
    },
};
