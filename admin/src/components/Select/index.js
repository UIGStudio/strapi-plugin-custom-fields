import React from 'react';
import {Option, Select} from '@strapi/design-system/Select';

import useSelect from './useSelect';

const SelectComponent = (data) => {
    const {options, ...props} = useSelect(data);

    console.log(data);
    return (
        <Select {...props}>
            {options.map(([value, label]) => (
                <Option value={value}>{label}</Option>
            ))}
        </Select>
    );
};

export default SelectComponent;
