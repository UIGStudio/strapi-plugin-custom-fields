import {useIntl} from 'react-intl';
import {useMemo} from 'react';
import useJSON from '../../utils/useJSON';

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

const defaultData = (multiple) => ({data: multiple ? [] : undefined});

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
    const select = useJSON(onChange, value, defaultData(multiple));
    const data = useMemo(
        () => select.value.data || defaultData(multiple).data,
        [select, multiple],
    );

    return {
        label: useFormattedString(intlLabel, name),
        description: useFormattedString(description, ''),
        placeholder: useFormattedString(placeholder, ''),
        options: Object.entries(options),
        multi: multiple,
        value: data,
        disabled,
        error,
        required,
        onClear: () => select.onChange(defaultData),
        onChange: (data) => select.onChange({data}),
        customizeContent: (values) =>
            values.map((val) => (val in options ? options[val] : val)).join(', '),
    };
}
