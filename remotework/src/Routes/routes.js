import { useContext } from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import AuthContext from "../Context/AuthContext"
import Finish from "../pages/Finish"

import Login from '../pages/Login'
import Sign from '../pages/Sign'
import Timer from '../pages/Timer'
export default function Routes(){
    // eslint-disable-next-line no-unused-vars
    const { isAuthenticated } = useContext(AuthContext)

    const PrivateRoute = ({component: Component, ...rest}) => {
        return <Route 
                    render = {props => 
                        isAuthenticated ? 
                        <Component {...props}/> : 
                        <Redirect to={{pathname:'/', states: {from: props.location}}}/>
                    }
                        {...rest}
                />
    }
    return(
      <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Login}/> 
            <Route path='/sign' exact component={Sign}/> 
            <PrivateRoute path='/timer' exact component={Timer}/>
            <PrivateRoute path='/finish' exact component={Finish}/>
        </Switch>
      </BrowserRouter>
    )
}