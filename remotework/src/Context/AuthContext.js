import { createContext, useState } from "react";

const AuthContext = createContext({
    login: () => {},
    createAccount: () => {},
    verifyToken: () => {},
    isAuthenticated: false,
    user: {},
    loading: false,
    setLoading: () => {}
})

export function AuthProvider({children}){
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

    async function createAccount(data){
        return await fetch(`${process.env.REACT_APP_BASE_URL}/users/register`, {
            method:'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                alert('User create with success')
            }
            if(data.error){
                alert(data.error)
            }
            return data
        })
        .catch(err => console.log(err))
    }

    async function login(dataToSend){
        return await fetch(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
            method: 'POST',
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-type": "application/json" 
            },
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                localStorage.setItem('TOKEN_JWT', data.token)
                setUser(data)
            }

            return data
        })
        .catch(err => console.log(err))

    }

    async function verifyToken(){
        const token = localStorage.getItem('TOKEN_JWT')
        return await fetch(`${process.env.REACT_APP_BASE_URL}/auth/verifytoken`, {
            method: "GET",
            body: undefined,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setUser(data)
            return data
        })
        .catch(err => console.log(err))
    }
    return(
        <AuthContext.Provider value={{isAuthenticated: !!user.success, user, loading, setLoading, createAccount, login, verifyToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext