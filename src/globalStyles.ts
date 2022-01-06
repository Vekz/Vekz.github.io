import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

interface ButtonProps {
    primary?: boolean;
    big?: boolean;
    fontBig?: boolean;
}

export const Button = styled.button<ButtonProps>`
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#EBCB8B' : '#4C566A')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #000;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({primary}) => (primary ? '#4C566A' : '#EBCB8B')};
        color: #3B4252;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

export default GlobalStyle