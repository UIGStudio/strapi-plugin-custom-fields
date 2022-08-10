import React from 'react';
import {TextInput} from '@strapi/design-system/TextInput';

import {ChromePicker} from 'react-color';
import useColorField from './useColorField';
import {Container, Cover, Picker, PickerPopup} from './styles';

const ColorField = ({name, onChange, value, intlLabel, ...rest}) => {
    const {visible, color, changeColor, setVisible} = useColorField(
        name,
        value,
        onChange,
    );

    return (
        <Container>
            <TextInput
                {...rest}
                value={color}
                name={name}
                intlLabel={intlLabel}
                label={intlLabel.defaultMessage}
                onChange={changeColor}
                type="text"
                style={{width: 120}}
                readOnly
            />
            <Picker style={{background: color}} onClick={() => setVisible(true)} />
            {visible && (
                <PickerPopup>
                    <Cover onClick={() => setVisible(false)} />
                    <ChromePicker color={color} onChange={changeColor} />
                </PickerPopup>
            )}
        </Container>
    );
};

export default ColorField;
