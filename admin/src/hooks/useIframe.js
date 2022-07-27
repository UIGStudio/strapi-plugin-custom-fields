import {useCallback, useEffect, useRef} from 'react';
import {useCMEditViewDataManager} from '@strapi/helper-plugin';
import debounce from 'lodash/debounce';

const parseUrl = (config, uid, id) => {
    const prefix = config.namespaces[uid];
    return `${config.previewUrl}/${prefix}/preview_${id}`;
};

export default function useIframe(config) {
    const ref = useRef(null);
    const {modifiedData, allLayoutData} = useCMEditViewDataManager();
    const data = useCMEditViewDataManager();

    const fetchPreview = async () => {
        console.log(data);
        const url = parseUrl(config, allLayoutData.contentType.uid, modifiedData.id);
        const res = await fetch(url);
        const html = await res.text();
        ref.current.src = url;
        ref.current.contentDocument.querySelector('html').innerHTML = html;
    };

    const delayCallApi = useCallback(debounce(fetchPreview, 5000), []);

    useEffect(() => {
        delayCallApi();
    }, [modifiedData]);

    return ref;
}
