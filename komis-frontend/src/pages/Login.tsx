import React, { useState } from 'react'
import '../css/Auth.css'
import ApiClient from '../service/ApiClient'
import { setUserInfo, useUserInfo } from '../PageInfo';

const apiClient = new ApiClient();

const Login = () => {

    const [ login, setLogin ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ errorInfo, setErrorInfo ] = useState('')

    const handleLogin = async() => {
        if(!(password =="" || login==""))
        {
            const resp = await apiClient.Login( login, password)
            console.log(resp)
            if(resp[0])
            {
                setUserInfo('logged', true)
            }
            else
            {
                setErrorInfo("Nieprawidłowy login lub hasło")
            }
            
        }
    }

    return (
        <div id ="RegisterForm">
            
            <h3>Login</h3>
            <input 
                name="Login" 
                placeholder="Login"
                onChange={(e) => setLogin(e.target.value)}
                />
            <h3>Password</h3>
            <input 
                name="password" 
                placeholder="Password"
                value={password} 
                type='password'
                onChange={(e) => setPassword(e.target.value)}/>
            
            <h3 id="errorInfo">{errorInfo}</h3>

            <button 
                name = "login"
                onClick={handleLogin}
                style={{
                    backgroundColor: (password =="" || login=="") ? 'grey' : 'green'}}
                    >Login</button>
        </div>
    )
}

export default Login
