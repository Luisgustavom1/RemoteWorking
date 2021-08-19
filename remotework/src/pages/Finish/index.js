import { useContext, useState } from "react";
import { useHistory } from "react-router";

import TimeContext from '../../Context/TimeContext'
import Header from "../../components/Header";

import ellipse from '../../assets/img/Ellipse.svg'

import { BarProgress, FinishStyled, SectionStyle } from "./styled";
import { ButtonStyled } from "../../styles/ButtonsActiveAndDisabled";
import { ButtonRectangle } from '../../styles/buttonRectangle'
import { ContainerBtnsRectangle } from '../../styles/containerBtnsRectangle'
import { parseCookies } from "nookies";

export default function Finish(){
    const { hourlyPrice, time, setTime, goal } = useContext(TimeContext)
    const [showGoal, setShowGoal] = useState(true)
    const history = useHistory()

    const totalHours = (Number(time.min) + Number(time.seg)/60)/60 + Number(time.hours)
    const totalHoursOfDay = Number(parseCookies().totalHours)

    const percentageDay = (totalHoursOfDay/24).toFixed(2)

    let percentageGoal = 100

    if(goal > 0){
        percentageGoal = (totalHours/goal).toFixed(2) * 100
    }
    return(
        <>
            <Header/>
            <FinishStyled>
                <div className='container'>
                    <span>
                        <img src={ellipse} alt='Icon'/>
                        <p>${hourlyPrice}/hour</p>
                    </span>
                    <h1>
                        {time.hours}:{time.min}:{time.seg}
                    </h1>
                    <section>
                        <ButtonStyled active={showGoal && true} onClick={() => setShowGoal(true)}>Your Goal</ButtonStyled>
                        <ButtonStyled active={!showGoal && true} onClick={() => setShowGoal(false)}>Today</ButtonStyled>
                    </section>
                    <BarProgress percentage={ showGoal ? percentageGoal : percentageDay }>
                        <div>
                            <p>{showGoal ? `${percentageGoal}% of Your Goal` : `${percentageDay}% of Today`}</p>
                        </div>
                    </BarProgress>
                    <SectionStyle win={totalHours > goal}>
                        <aside>
                            <h3>In Your Goal</h3>
                            <p className='goal hit'>{ totalHours > goal ? 'Congratulation, you hit your goal!' : 'Goal not hit, try harder next'}</p>
                            <p className='goal'>
                                <i class="fas fa-dollar-sign"></i>
                                {(totalHours*hourlyPrice).toFixed(2)}
                            </p>
                        </aside>
                        <aside>
                            <h3>Earnings Today</h3>
                            <p>
                                <i class="fas fa-dollar-sign"></i>
                                {(totalHoursOfDay*hourlyPrice).toFixed(2)}
                            </p>
                        </aside>
                    </SectionStyle>
                    <ContainerBtnsRectangle>
                        <ButtonRectangle onClick={() => window.location.href = 'https://www.youtube.com/watch?v=m9gLjW_4lXQ&t=15050s'}>Take a Rest</ButtonRectangle>
                        <ButtonRectangle transparent='true' onClick={() => {
                            history.push('/timer')
                            setTime({
                                hours: '00',
                                min: '00',
                                seg: '00'
                            })
                        }}>Work More</ButtonRectangle>
                    </ContainerBtnsRectangle>
                </div>
            </FinishStyled>
        </>        
    )
}