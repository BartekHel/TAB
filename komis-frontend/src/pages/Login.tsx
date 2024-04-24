import React, { useState } from 'react'
import '../css/Auth.css'

const Login = () => {
    const [ login, setLogin ] = useState('')
    const [ password, setPassword ] = useState('')
    

    const handleLogin = () => {
        if(!(password =="" || login==""))
        {
            alert("tutaj się coś stanie jak będzie backend");
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
