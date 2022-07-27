import React from 'react';
import {Close, Iframe, PreviewContainer, Resize} from "./styles";
import Cross from '@strapi/icons/Cross';
import {IconButton} from '@strapi/design-system/IconButton';

import useIframe from "../../hooks/useIframe";
import useResize from "../../hooks/useResize";

const Preview = ({open, close, config}) => {
    const ref = useIframe(config);
    const {ref: resizeRef, width} = useResize();

    return (
        <PreviewContainer open={open} style={{width}}>
            <Iframe ref={ref}/>
            <Close open={open} onClick={close}>
                <IconButton label="Close" icon={<Cross/>}/>
            </Close>
            <Resize ref={resizeRef} open={open}/>
        </PreviewContainer>
    );
};

export default Preview;
