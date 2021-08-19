import styled from 'styled-components';

export const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 95vw;

    margin: 30px auto;

    h1{
        font-size: 24px;
        font-weight: 500;
    }
    div{
        display: flex;
        align-items: center;
    }
    button:nth-child(1){
        margin-right: 16px;
    }

    i{
        font-size: 20px;

        margin-right: 16px;
    }
    i:hover{
        font-size: 22px;
    }
    @media(max-width: 440px){
        h1{
            font-size: 20px;
        }
    }
    @media(max-width: 340px){
        h1{
            font-size: 18px;
        }
    }
`