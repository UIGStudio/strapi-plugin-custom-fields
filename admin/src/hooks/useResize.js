import {useEffect, useRef, useState} from 'react';

const key = 'PREVIEW_WIDTH'

const normalizeValue = (width) => {
    return Math.min(
        window.innerWidth - 50,
        Math.max(300,
            width
        )
    );
};

const getInitialWidth = (width) => {
    const savedWidth = localStorage.getItem(key);
    return normalizeValue(savedWidth ? (parseInt(savedWidth) || width) : width);
};

export default function useIframe(initialWidth = 800) {
    const [width, setWidth] = useState(getInitialWidth(initialWidth));
    const [finalWidth, setFinalWidth] = useState(width);
    const active = useRef(false);
    const startWidth = useRef(0);
    const widthRef = useRef(0);
    const clickX = useRef(0);
    const ref = useRef();


    useEffect(() => {
        const onStart = (e) => {
            active.current = true;
            clickX.current = e.pageX;
            startWidth.current = width;
            document.body.style.userSelect = 'none';
        };

        const onMove = (e) => {
            if (active.current) {

                widthRef.current = normalizeValue(
                    startWidth.current + clickX.current - e.pageX
                );
                setWidth(widthRef.current);
            }
        };
        const onEnd = () => {
            if (active.current) {
                localStorage.setItem(key, `${widthRef.current}`);
                active.current = false;
                setFinalWidth(widthRef.current);
                document.body.style.userSelect = 'auto';
            }
        };

        ref.current?.addEventListener('mousedown', onStart);
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onEnd);

        return () => {
            ref.current?.removeEventListener('click', onStart);
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onEnd);
        };
    }, [finalWidth]);
    return {ref, width};
}
