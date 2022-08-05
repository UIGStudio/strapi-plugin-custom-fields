import React from 'react';
import {Typography} from '@strapi/design-system/Typography';

import useTableField from './useTableField';
import TableRows from './TableRows';
import {Container} from './styles';

const TableField = ({name, value, attribute, onChange, intlLabel}) => {
    const {
        data,
        addRow,
        addColumn,
        removeColumn,
        removeRow,
        cellChange,
        visibleChange,
    } = useTableField(name, value, onChange);

    return (
        <Container>
            <Typography variant="omega" fontWeight="semiBold">
                {intlLabel.defaultMessage}
            </Typography>
            <TableRows
                type={'head'}
                addColumn={addColumn}
                removeColumn={removeColumn}
                cellChange={cellChange}
                visibleChange={visibleChange}
                data={data.head}
            />
            <TableRows
                type={'body'}
                addRow={addRow}
                removeRow={removeRow}
                cellChange={cellChange}
                visibleChange={visibleChange}
                data={data.body}
            />
            <TableRows
                type={'footer'}
                cellChange={cellChange}
                visibleChange={visibleChange}
                data={data.footer}
            />
        </Container>
    );
};

export default TableField;
