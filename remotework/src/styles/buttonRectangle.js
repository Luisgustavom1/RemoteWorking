import styled from "styled-components";

export const ButtonRectangle = styled.button`
    background: ${ props => props.transparent ? 'rgba(125, 123, 255, .5)' : 'rgba(125, 123, 255, 1)'};
    
    border-radius: 8px;

    min-width: 295px;
    height: 60px;
    &:hover{
        background: ${ props => props.transparent ? 'rgba(125, 123, 255, 1)' : 'rgba(125, 123, 255, .5)'};
    }
`