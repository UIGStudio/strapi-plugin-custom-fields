
export const fixPrefix = (prefix) => {
    if (prefix && prefix.length) {
        prefix = prefix.replace(/^\//, '').replace(/\/$/, '')
        return `/${prefix}`
    }
    return '';
};

export const createUrl = (config, uid, id) => {
    const prefix = config.namespaces[uid].urlPrefix;
    const url = config.namespaces[uid]?.previewUrl || config.previewUrl;
    return `${url}${fixPrefix(prefix)}/preview_${id}`;
};
