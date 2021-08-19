import { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { FormStyled } from './styled'
import { ButtonRectangle } from '../../styles/buttonRectangle'
import { ErrorMessage } from '../../styles/errorMessage'
import AuthContext from '../../Context/AuthContext'

export default function Login(){
    const [errors, setErrors] = useState()
    const { login, verifyToken } = useContext(AuthContext)
    const history = useHistory()
    
    function verification(e){
        e.preventDefault()

        const data = new FormData(e.target)
        const dataToSend = {
            userData: {
                email: data.get('email'),
                password: data.get('password')
            }
        }

        if(dataToSend.userData.email.length === 0 || dataToSend.userData.password.length === 0){
            setErrors('O campo é obrigatório')
        }

        login(dataToSend)
        .then(res => res.success ? history.push('/timer') : alert('Email or Password invalid'))
    }

    useEffect(() => {
        verifyToken()
        .then(res => res.success && history.push('/timer'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <FormStyled>
            <h1>Remote Work</h1>
            <form onSubmit={(e) => verification(e)}>
                <div>
                    <label for='email'>E-mail</label>
                    <input id='email' name='email' type='text' placeholder='Example@email.com'></input>
                    {errors && <ErrorMessage>{errors}</ErrorMessage>}
                </div>
                <div>
                    <label for='password'>Password</label>
                    <input id='password' name='password' type='password' placeholder='Type your password'></input>
                    {errors && <ErrorMessage>{errors}</ErrorMessage>}
                </div>
                <ButtonRectangle type='submit'>Login</ButtonRectangle>
            </form>
            <p>Don't have account? Create your account now, <Link to='/sign'>click here!</Link></p>
        </FormStyled>
    )
}