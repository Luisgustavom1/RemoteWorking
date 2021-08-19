import { useContext, useState } from 'react'
import TimeContext from '../../Context/TimeContext'
import { ButtonRectangle } from '../../styles/buttonRectangle'
import { ErrorMessage } from '../../styles/errorMessage'
import { ModalPriceStyle } from './styled'

export default function ModalPrice(props){
    const { setHourlyPrice, setGoal } = useContext(TimeContext)
    const [errors, setErrors] = useState({
        first: false,
        secondary: false
    })

    const getHourlyPrice = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        
        const hourlyPriceInput = data.get('hourlyPrice')
        const goal = data.get('goal')

        if(goal.length === 0 && hourlyPriceInput.length === 0){
            setErrors({
                first: true,
                secondary: true
            })
        } else if(goal.length === 0){
            setErrors({
                first: false,
                secondary: true
            })
        } else if(hourlyPriceInput.length === 0){
            setErrors({
                first: true,
                secondary: false
            })
        } else {
            setHourlyPrice(hourlyPriceInput)
            setGoal(goal)
            props.setStart(true)
            props.setActiveModal(false)
        }
    }
    return(
        <ModalPriceStyle>
            <main>
                <section onClick={() => props.setActiveModal(false)}><i class="fas fa-times"></i></section>
                <h1>Please write your Hourly Price</h1>
                <form onSubmit={(e) => getHourlyPrice(e)}>
                    <div>
                        <label for='hourlyPrice' className='labelOne'>Hourly Price</label>
                        <input type='number' name='hourlyPrice' id='hourlyPrice' max='999999999999999' placeholder='120/hour'></input>
                    </div>
                    {errors.first && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}
                    <div>
                        <label for='goal'>Goal of Hours</label>
                        <input type='number' name='goal' id='goal' max='24' placeholder='3 hours'></input>
                    </div>
                    {errors.secondary && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}
                    <ButtonRectangle type='submit'>Start</ButtonRectangle>
                </form>
            </main>
        </ModalPriceStyle>
    )
}