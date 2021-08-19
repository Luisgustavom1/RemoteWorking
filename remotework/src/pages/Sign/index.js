import { Link, useHistory } from 'react-router-dom'

import { FormStyled } from "../Login/styled"
import { ButtonRectangle } from "../../styles/buttonRectangle"
import { useContext, useState } from "react"
import { ErrorMessage } from '../../styles/errorMessage'
import AuthContext from '../../Context/AuthContext'

export default function Sign(){
    const [errors, setErrors] = useState({
        passwordEquals: '',
        inputRequired: ''
    })
    const { createAccount } = useContext(AuthContext)
    const history = useHistory()

    async function validation(e){
        e.preventDefault()

        const data = new FormData(e.target)
        const dataToSend = {
            userData: {
                email: data.get('email'),
                password: data.get('password'),
                user: data.get('user')
            }
        }

        if(dataToSend.userData.email.length === 0 || dataToSend.userData.password.length === 0 || dataToSend.userData.user.length === 0){
            return setErrors({
                inputRequired: 'O campo é obrigatório'
            })
        }

        if(dataToSend.userData.password !== data.get('repeatPassword')){
            return setErrors({
                passwordEquals: 'As senhas não coincidem'
            })
        }
        createAccount(dataToSend)
        .then(res => res.success && history.push('/'))
    }   
    
    return(
        <FormStyled style={{paddingTop: '100px'}}>
            <h1>Remote Work</h1>
            <form onSubmit={(e) => validation(e)}>
                <div>
                    <label for='user'>User</label>
                    <input id='user' name='user' type='user' placeholder='Type your user'/>
                    {errors.inputRequired && <ErrorMessage>{errors.inputRequired}</ErrorMessage>}
                </div>
                <div>
                    <label for='email'>E-mail</label>
                    <input id='email' name='email' type='text' placeholder='Example@email.com'/>
                    {errors.inputRequired && <ErrorMessage>{errors.inputRequired}</ErrorMessage>}
                </div>
                <div>
                    <label for='password'>Password</label>
                    <input id='password' name='password' type='password' placeholder='Type your password'/>
                    {errors.passwordEquals && <ErrorMessage>{errors.passwordEquals || errors.inputRequired}</ErrorMessage>}
                </div>
                <div>
                    <label for='repeatPassword'>Repeat Password</label>
                    <input id='repeatPassword' name='repeatPassword' type='password' placeholder='Repaet your password'/>
                    {errors.passwordEquals && <ErrorMessage>{errors.passwordEquals || errors.inputRequired}</ErrorMessage>}
                </div>
                <ButtonRectangle type='submit'>Login</ButtonRectangle>
            </form>
            <p>Do you have an account? Login to your account now, <Link to='/'>click here!</Link></p>
        </FormStyled>
    )
}