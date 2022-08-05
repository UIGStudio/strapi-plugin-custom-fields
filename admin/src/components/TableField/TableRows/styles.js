import styled from 'styled-components';

export const Input = styled.textarea`
    min-height: 2.5rem;
    height: 2.5rem;
    max-height: 8rem;
    max-width: 200px;
    min-width: 200px;
    color: ${({theme}) => theme.colors.neutral800};
    background: ${({theme}) => theme.colors.neutral0};
    border: 1px solid ${({theme}) => theme.colors.secondary200};
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Container = styled.div`
    overflow-x: auto;
`;
