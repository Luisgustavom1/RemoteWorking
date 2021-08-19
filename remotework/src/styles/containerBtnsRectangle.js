import styled from "styled-components";

export const ContainerBtnsRectangle = styled.section`
    margin: 48px 0;
    
    display: flex;
    
    button:nth-child(1){
        margin-right: 40px;
    }
    
    @media(max-width: 650px){
        flex-direction: column;

        button:nth-child(1){
            margin-right: 0;
            margin-bottom: 20px;
        }
    }
`