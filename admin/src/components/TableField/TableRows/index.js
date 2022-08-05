import React from 'react';
import {Stack} from '@strapi/design-system/Stack';
import {Box} from '@strapi/design-system/Box';
import {Flex} from '@strapi/design-system/Flex';
import {Typography} from '@strapi/design-system/Typography';
import Plus from '@strapi/icons/Plus';
import Eye from '@strapi/icons/Eye';
import EyeStriked from '@strapi/icons/EyeStriked';
import Trash from '@strapi/icons/Trash';
import {IconButton} from '@strapi/design-system/IconButton';
import {Button} from '@strapi/design-system/Button';
import {Input} from './styles';

const TableRows = ({
    type,
    visibleChange,
    addColumn,
    removeColumn,
    cellChange,
    data,
    addRow,
    removeRow,
}) => {
    return (
        <Box paddingTop={4}>
            <Stack horizontal spacing={2}>
                <IconButton
                    label={'Set visibility'}
                    onClick={() => visibleChange(type, !data.visible)}
                    icon={data.visible ? <Eye /> : <EyeStriked />}
                />
                <Typography>
                    {type.replace(/^\w/, (e) => e.toLocaleUpperCase())}
                </Typography>
            </Stack>
            {data.rows.map((row, ri) => (
                <Flex key={`row-${ri}`} alignItems={'flex-start'}>
                    {row.map((cell, ci) => (
                        <Box style={{width: 200}}>
                            {removeColumn && row.length > 1 && (
                                <Button
                                    onClick={() => removeColumn(ci)}
                                    startIcon={<Trash />}
                                    sixw="S"
                                    variant="danger-light"
                                    fullWidth
                                >
                                    Remove column
                                </Button>
                            )}
                            <Input
                                key={`${ri}-${ci}`}
                                value={cell}
                                onChange={cellChange(type, ri, ci)}
                            />
                        </Box>
                    ))}
                    {removeRow && data.rows.length > 1 && (
                        <IconButton
                            onClick={removeRow(ri)}
                            icon={<Trash />}
                            label="Remove Row"
                            sixw="S"
                            variant="danger-light"
                        />
                    )}
                    {addColumn && (
                        <IconButton
                            onClick={addColumn}
                            icon={<Plus />}
                            sixw="S"
                            label="Add column"
                            variant="secondary"
                        />
                    )}
                </Flex>
            ))}
            {addRow && (
                <Button
                    onClick={addRow}
                    startIcon={<Plus />}
                    sixw="S"
                    variant="secondary"
                >
                    Add row
                </Button>
            )}
        </Box>
    );
};

export default TableRows;
