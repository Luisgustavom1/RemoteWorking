import styled from "styled-components";

export const TimerStyle = styled.main`
    width: 630px;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 80px auto 0 auto;
    section{
        min-width: 276px;

        margin-top: 48px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        text-align: center;
       p{
            color: rgba(255, 255, 255, .7);

            font-size: 14px;
            font-weight: 400;

            margin-top: 16px;
       }
    }
    .hourlyPrice{
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        font-size: 16px;

        margin-bottom: 20px;

        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            img:nth-child(1){
                margin-right: 12px;
            }
        }
    }
    @media(max-width: 650px){
        width: 90vw;
    }
`

export const Counter = styled.div`
    background: ${props => `linear-gradient(to ${props.deg > 100 ? 'left' : 'right'}, ${props.deg > 100 ? '#F4BCEF' : '#9795FF'} 50%, transparent 50%, transparent),
        linear-gradient(${props.deg}deg, #9795FF 50%, #F4BCEF 50%)`};

    width: 17vw;
    height: 17vw;

    min-width: 240px;
    min-height: 240px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    div{
        background-color: rgba(125, 123, 255, 1);

        width: 85%;
        height: 85%;

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        h1{
            font-size: 40px;
            font-weight: 500;
            letter-spacing: 2px;
        }
    }
;
`