import styled from "styled-components";

export const FinishStyled = styled.main`
    width: 630px;

    margin: 80px auto 0 auto;
    span{
        display: flex;
        align-items: center;
        gap: 12px;
    }
    h1{
        font-size: 48px;
        font-weight: 500;

        margin-top: 26px;
    }
    section{
        width: 35vw;
        min-width: 260px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;

        margin: 40px 0 60px 0;
    }
    @media(max-width: 650px){
        .container{
            width: 280px;
            margin: 0 auto;
        }
    }
`

export const SectionStyle = styled.section`
    display: flex;
    align-items: flex-end;
    
    aside{
        margin-top: 36px;
        h3{
            font-size: 22px;
            font-weight: 500;

            margin-bottom: 16px;
        }
        p{
            font-size: 36px;
            font-weight: 500;

            display: flex;
            align-items: center;
            gap: 5px;
            i{
                font-size: 24px;
                color: #7D7BFF;
            }
        }
    }
    .goal{
        color: ${props => props.win ? '#4AB516' : '#F75454'};
    }
    .goal.hit{
        font-size: 15px;
    }
`

export const BarProgress = styled.div`
    background-color: #7D7BFF;
    
    width: 90%;    
    height: 30px;

    border-radius: 111.75px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    div{
        background-color: #E289F2;

        width: ${props => props.percentage}%;
        height: 32px;

        border-radius: 111.75px;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        padding-left: 20px;
        p{
            position: absolute;
            
            top: 50%;
            transform: translateY(120%)
        }
    }
`