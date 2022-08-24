import {useCallback, useMemo} from 'react';

export default function useJSON(onChange, value, defaultValue) {
    return {
        value: useMemo(() => {
            try {
                return JSON.parse(value);
            } catch (_) {
                return defaultValue;
            }
        }, [value, defaultValue]),

        onChange: useCallback(
            (data) => {
                onChange({
                    target: {
                        name,
                        value: JSON.stringify(data),
                    },
                });
            },
            [onChange],
        ),
    };
}
