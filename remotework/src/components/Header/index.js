import { useHistory } from 'react-router'

import { ButtonWhite } from '../../styles/buttonWhite'
import { HeaderStyle } from './styled'

export default function Header(){
    const history = useHistory()
    
    return(
        <HeaderStyle>
            <div>
                <i class="fas fa-sign-out-alt" onClick={() => {
                    localStorage.clear()
                    history.push('/')
                }}/>
                <h1>Remote Work</h1>
            </div>
            <div className='buttons'>
                <ButtonWhite onClick={() => window.location.href = 'https://github.com/Luisgustavom1'}>Contact</ButtonWhite>
                <ButtonWhite>About</ButtonWhite>
            </div>
        </HeaderStyle>
    )
}