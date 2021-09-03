import { useState } from "react";
import { createContext } from "react";

const AppContext = createContext({
    hourlyPrice: null,
    setHourlyPrice: () => {},
    time: {},
    setTime: () => {},
    goal: null,
    setGoal: () => {}
})

export const AppProvider = ({children}) => {
    const [hourlyPrice, setHourlyPrice] = useState(0)
    const [time, setTime] = useState({
        hours: '00',
        min: '00',
        seg: '00'
    })
    const [goal, setGoal] = useState(0)

    return(
        <AppContext.Provider 
            value={{
                hourlyPrice, 
                setHourlyPrice, 
                time, 
                setTime, 
                goal, 
                setGoal
            }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext
