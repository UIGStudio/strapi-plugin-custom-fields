import {useIntl} from 'react-intl';
import {useCallback, useMemo} from 'react';

const useFormattedString = (data, defaultValue) => {
    const {formatMessage} = useIntl();
    return useMemo(() => {
        return data
            ? formatMessage(
                  {id: data.id, defaultMessage: data.defaultMessage},
                  {...data.values},
              )
            : defaultValue;
    }, [data, defaultValue, formatMessage]);
};

export default function useSelect({
    intlLabel,
    description,
    placeholder,
    attribute,
    name,
    value,
    error,
    onChange,
    disabled,
    required,
    multiple,
}) {
    const options = useMemo(() => attribute.options || {}, [attribute]);
    const data = useMemo(() => {
        try {
            return JSON.parse(value);
        } catch (_) {
            return {data: []};
        }
    }, [value]);
    const change = useCallback(
        (data) => {
            onChange({
                target: {
                    name,
                    value: JSON.stringify({data}),
                },
            });
        },
        [onChange],
    );

    return {
        label: useFormattedString(intlLabel, name),
        description: useFormattedString(description, ''),
        placeholder: useFormattedString(placeholder, ''),
        options: Object.entries(options),
        multi: multiple,
        value: data.data,
        disabled,
        error,
        required,
        onClear: () => change([]),
        onChange: change,
        customizeContent: (values) =>
            values.map((val) => (val in options ? options[val] : val)).join(', '),
    };
}
