import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { parseCookies, setCookie } from 'nookies'
import Header from '../../components/Header'

import { ButtonRectangle } from '../../styles/buttonRectangle'
import { CircularButton } from '../../styles/circularButton'
import { ContainerBtnsRectangle } from '../../styles/containerBtnsRectangle'
import { Counter, TimerStyle } from './styled'

import pause from '../../assets/img/pause.svg'
import ellipse from '../../assets/img/Ellipse.svg'

import ModalPrice from '../../components/ModalPrice'
import TimeContext from '../../Context/TimeContext'

import alarmSound from './Bugle_Tune.mp3'

export default function Timer(){
    const history = useHistory()

    const [start, setStart] = useState(false)
    const [activeModal, setActiveModal] = useState(false)
    
    const timerDate = new Date('2019-02-20T00:00:00')

    const { time, setTime, goal, hourlyPrice } = useContext(TimeContext)

    var initialDeg = -89.9

    const totalHours = (Number(time.min) + Number(time.seg)/60)/60 + Number(time.hours);
    const deg = (totalHours/goal)*3.6*100

    const percentageOfTotal = initialDeg + deg

    const stopCount = () => {
        if(Number(totalHours) + 0.00028 > goal){
            setStart(false)
            const alarm = new Audio(alarmSound)
            alarm.play()
        }
    }

    const finish = () => {
        if(time.min === '00' && time.seg === '00'){
            alert('Inicie o timer antes de finalizar')
        } else {
            history.push('/finish')
        }
        const worked = parseCookies() ? 0 : parseCookies().totalHours
        setCookie(null, 'totalHours', totalHours + Number(worked), {
            maxAge: 24 * 60 * 60,
            path: '/'
        })
    }

    const openModal = () => {
        if(hourlyPrice === 0){
            setActiveModal(true)
        } else {
            setStart(!start)
        }
    }

    const count = () => {
        stopCount();

        timerDate.setSeconds(timerDate.getSeconds() + 1);

        setTime({
            seg: timerDate.getSeconds().toString(),
            min: timerDate.getMinutes().toString(),
            hours: timerDate.getHours().toString()
        });
    }

    function resetTime(){
        setStart(false)

        setTime({
            hours: '00',
            min: '00',
            seg: '00'
        })
    }

    useEffect(() => {
        if(start){
            var interval = setInterval(() => {
                count()
            }, 1000);
            return () => clearInterval(interval)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [start])
    return(
        <>
        <Header/>
        <TimerStyle>
            <div className='hourlyPrice'>
                <div>
                    <img src={ellipse} alt='icon ellipse'></img>
                    <p>${hourlyPrice}/hour</p>
                </div>
                <div>
                    <img src={ellipse} alt='icon ellipse'></img>
                    <p>${(totalHours * hourlyPrice).toFixed(2)}</p>
                </div>
            </div>
            <Counter deg={percentageOfTotal || -90}>
                <div>
                    <h1>{time.hours.padStart(2, '0')}:{time.min.padStart(2, '0')}:{time.seg.padStart(2, '0')}</h1>
                </div>
            </Counter>
            <section>
                <div onClick={() => openModal()}>
                    <CircularButton>
                        {start ? <img src={pause} alt='Icon Pause'></img> : <i class="fas fa-play"></i>}
                    </CircularButton>
                    <p>{start ? 'pause' : 'start'}</p>
                </div>
                <div>
                    <CircularButton onClick={() => resetTime()}>
                        <i class="fas fa-redo"></i>
                    </CircularButton>
                    <p>Reset</p>
                </div>
            </section>
            <ContainerBtnsRectangle>
                <ButtonRectangle onClick={() => finish()}>
                    Finish
                </ButtonRectangle>
                <ButtonRectangle transparent='true' onClick={() => {
                    history.push('/')
                    localStorage.clear()
                }}>
                    Quit
                </ButtonRectangle>
            </ContainerBtnsRectangle>
        </TimerStyle>
        {activeModal && <ModalPrice setActiveModal={setActiveModal} setStart={setStart}/>}
        </>
    )
}