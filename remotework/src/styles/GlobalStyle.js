import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: rgba(255, 255, 255, 1);
        font-family: 'Rubik', sans-serif;
    }
    body{
        background-color: #5956E9;
    }
    button, input{
        border: none;
        outline: none;
    }
    li, ul, ol, a{
        text-decoration: none;
    }
`