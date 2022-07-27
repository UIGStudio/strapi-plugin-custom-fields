module.exports = [
    {
        method: 'GET',
        path: '/config',
        handler: 'content-preview.config',
        config: {
            policies: ['admin::isAuthenticatedAdmin'],
        },
    },
];
