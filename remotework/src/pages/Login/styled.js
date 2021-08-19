import styled from "styled-components";

export const FormStyled = styled.div`
    padding-top: 200px;
    margin: 0 auto;

    width: 25%;
    min-width: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-family: 'Permanent Marker', cursive;
        font-weight: 400;
        margin-bottom: 40px;
    }
    form{
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        margin: 0 auto 15px auto;

        width: 100%;
        label{
            padding-bottom: 5px;

            font-size: 14px;
        }
        input{
            width: 100%;

            padding: 13px;

            border-radius: 6px;
            
            color: black;
        }
    }
    button{
        height: 45px;
        min-width: 120px;

        margin-top: 15px;
    }
    > p{
        font-size: 11px;

        margin-top: 15px;
    }
    a{
        color: rgb(52, 50, 139);
    }
`