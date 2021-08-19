import styled from "styled-components";

export const ModalPriceStyle = styled.div`
    background-color: rgba(0, 0, 0, .3);

    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    overflow-y: hidden;
    
    display: flex;
    section{
        align-self: flex-end;

        padding-right: 20px;

        font-size: 20px;

        margin-bottom: 20px;
    }
    main{
        background-color: #4845DB;
        
        width: 40vw;
        min-width: 280px;
        height: 360px;

        margin: 200px auto 0 auto;
        padding-top: 20px;

        border-radius: 20px;

        display: flex;
        flex-direction: column;
        align-items: center;

        text-align: center;
        h1{
            font-size: 25px;
            
            margin-bottom: 30px;
        }
        div{
            display: flex;
            flex-direction: column;

            width: 220px;

            margin-bottom: 10px;
            label{
                align-self: flex-start;
                color: #E289F2;
            }
            .labelOne{
                color: #A6A4FD;
            }
            input{
                width: 100%;

                border-radius: 6px;
                padding: 10px;

                margin-top: 5px;

                color: black;
            }
            input[type=number]::-webkit-inner-spin-button { 
                -webkit-appearance: none;   
            }
        }
        p{
            text-align: start;
        }
        button{
            min-width: 120px;
            height: 40px;

            margin: 10px auto 0 auto;
        }
    }
`