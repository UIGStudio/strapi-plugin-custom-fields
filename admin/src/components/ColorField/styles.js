import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
    align-items: flex-end;
    gap: 4px;
`;

export const Picker = styled.div`
    width: 100px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid ${({theme}) => theme.colors.secondary200};
`;

export const PickerPopup = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
`;

export const Cover = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;
