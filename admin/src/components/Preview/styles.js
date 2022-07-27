import styled from 'styled-components';


export const PreviewContainer = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    background: ${({theme}) => theme.colors.neutral100};
    margin: 0;
    z-index: 100;
    transform: translateX(${({open}) => open ? 0 : 100}%);
    transition: all .3s ease;
    border-left: 1px solid ${({theme}) => theme.colors.neutral200};
`;


export const Close = styled.div`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    transform: translateX(${({open}) => open ? -100 : 0}%);
    transition: all .3s ease;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Resize = styled.div`
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: 0;
    transform: translateX(${({open}) => open ? -50 : 0}%);
    transition: all .3s ease;
    width: 16px;
    height: 40px;
    border-radius: 5px;
    background: ${({theme}) => theme.colors.neutral100};
    border: 2px solid ${({theme}) => theme.colors.primary600};
    display: flex;
    justify-content: center;
    align-items: center;

    &:before, &:after {
        display: block;
        content: '';
        width: 2px;
        height: 32px;
        position: absolute;
        top: 2px;
        left: 3px;
        background: ${({theme}) => theme.colors.primary600};;
    }

    &:after {
        left: unset;
        right: 3px;
    }
`;


export const Iframe = styled.iframe`
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;
