import styled from 'styled-components'

export const ButtonWhite = styled.button`
    background-color: rgba(255, 255, 255, 1);
    color: rgba(90, 87, 232, 1);

    border-radius: 57px;

    min-width: 98px;
    width: 9vw;
    height: 45px;
    &:hover{
        background-color: rgba(255, 255, 255, .5);
    }
    @media(max-width: 440px){
        min-width: 88px;
    }
;
`