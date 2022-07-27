import React, {useState} from 'react';
import {useCMEditViewDataManager} from '@strapi/helper-plugin';
import {Button} from '@strapi/design-system';
import Cast from '@strapi/icons/Cast';
import Preview from "../Preview";
import useConfig from "../../hooks/useConfig";

const Injector = () => {
    const {
        allLayoutData,
    } = useCMEditViewDataManager();
    const {config, loading} = useConfig();
    const {uid} = allLayoutData.contentType;
    const [open, setOpen] = useState(false);

    if (loading || !config || !Object.keys(config.namespaces).includes(uid)) {
        return null
    }

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                size="S"
                startIcon={<Cast/>}
                style={{width: '100%'}}
            >
                <span>Open preview</span>
            </Button>
            <Preview
                open={open}
                config={config}
                close={() => setOpen(false)}
            />
        </>
    );
};

export default Injector;
