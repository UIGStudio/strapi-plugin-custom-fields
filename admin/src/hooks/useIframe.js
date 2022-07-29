import {useCallback, useEffect, useRef} from 'react';
import {useCMEditViewDataManager} from '@strapi/helper-plugin';
import debounce from 'lodash/debounce';
import {createUrl} from "../utils/preview";


export default function useIframe(config) {
    const ref = useRef(null);
    const {modifiedData, initialData, allLayoutData,} = useCMEditViewDataManager();
    const {versionNumber, publishedAt} = modifiedData;

    const refreshPreview = useCallback(() => {
        ref.current.src = createUrl(config, allLayoutData.contentType.uid, modifiedData.id);
    }, []);

    const saveContent = useCallback(() => {
        // FIXME save content in another way
        document.querySelector('button[type="submit"]').click();
    }, []);

    const callSave = useCallback(debounce(saveContent, 5000), []);

    useEffect(() => {
        if (versionNumber && versionNumber !== 1 && !publishedAt && config.autoSave) {
            callSave()
        }
    }, [modifiedData, config]);

    useEffect(() => {
        refreshPreview();
    }, [initialData]);

    return ref;
}
