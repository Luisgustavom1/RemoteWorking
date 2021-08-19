import styled from "styled-components";

export const ButtonStyled = styled.button`
    background-color: ${props => props.active ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)'};
    color: ${props => props.active ? '#5956E9' : '#BDBCFF'};

    font-size: 15px;
    font-weight: 500;

    width: 50%;
    min-width: 123px;
    height: 40px;

    border-radius: 8px;

    &:hover{
        background-color: ${props => props.active ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)'};
        filter: brightness(95%)
    }
`