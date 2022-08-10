import {useCallback, useMemo} from 'react';

const initialValue = {
    head: {
        visible: true,
        rows: [['', '']],
    },
    body: {
        visible: true,
        rows: [
            ['', ''],
            ['', ''],
        ],
    },
    footer: {
        visible: false,
        rows: [['', '']],
    },
};

export default function useTableField(name, value, onChange) {
    const data = useMemo(() => {
        try {
            return JSON.parse(value);
        } catch (_) {
            return initialValue;
        }
    }, [value]);

    const change = useCallback(
        (newData) => {
            onChange({
                target: {
                    name,
                    value: JSON.stringify(newData),
                },
            });
        },
        [onChange],
    );

    const visibleChange = useCallback(
        (type, visible) => {
            change({
                ...data,
                [type]: {
                    ...data[type],
                    visible,
                },
            });
        },
        [data, change],
    );

    const cellChange = useCallback(
        (type, rowIndex, cellIndex) => (e) => {
            change({
                ...data,
                [type]: {
                    ...data[type],
                    rows: data[type].rows.map((row, rI) =>
                        rowIndex !== rI
                            ? row
                            : row.map((cell, cI) =>
                                cellIndex !== cI ? cell : e.target.value,
                            ),
                    ),
                },
            });
        },
        [data, change],
    );

    const addColumn = useCallback(() => {
        const addRowColumn = (element) => ({
            ...element,
            rows: element.rows.map((row) => [...row, '']),
        });
        change({
            ...data,
            head: addRowColumn(data.head),
            body: addRowColumn(data.body),
            footer: addRowColumn(data.footer),
        });
    }, [data, change]);

    const removeColumn = useCallback(
        (columnIndex) => {
            const addRowColumn = (element) => ({
                ...element,
                rows: element.rows.map((row) =>
                    row.filter((_, cI) => cI !== columnIndex),
                ),
            });
            change({
                ...data,
                head: addRowColumn(data.head),
                body: addRowColumn(data.body),
                footer: addRowColumn(data.footer),
            });
        },
        [data, change],
    );

    const addRow = useCallback(() => {
        change({
            ...data,
            body: {
                ...data.body,
                rows: [
                    ...data.body.rows,
                    new Array(data.head.rows[0].length).fill(''),
                ],
            },
        });
    }, [data, change]);

    const removeRow = useCallback(
        (rowIndex) => () => {
            change({
                ...data,
                body: {
                    ...data.body,
                    rows: data.body.rows.filter((_, rI) => rI !== rowIndex),
                },
            });
        },
        [data, change],
    );

    return {
        data,
        visibleChange,
        cellChange,
        addColumn,
        addRow,
        removeColumn,
        removeRow,
    };
}
