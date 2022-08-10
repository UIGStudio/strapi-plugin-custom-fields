import {useCallback, useState} from 'react';

import {rgbaToHex} from './utils';

export default function useColorField(name, value, onChange) {
    const [visible, setVisible] = useState(false);

    const changeColor = useCallback(
        (color, e) => {
            console.log(color, e);
            onChange({
                target: {
                    name,
                    value: rgbaToHex(
                        color.rgb.r,
                        color.rgb.g,
                        color.rgb.b,
                        color.rgb.a,
                    ),
                },
            });
        },
        [onChange],
    );

    return {visible, setVisible, color: value, changeColor};
}
