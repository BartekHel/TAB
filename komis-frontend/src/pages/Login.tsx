import React, { useContext, useState } from 'react'
import '../css/Auth.css'
import ApiClient from '../service/ApiClient'
import userContext from '../PageInfo';

const apiClient = new ApiClient();

const Login = () => {

    const [ login, setLogin ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errorInfo, setErrorInfo ] = useState('');
    const{setLogged, setUserId} = useContext(userContext);

    const handleLogin = async() => {
        if(!(password =="" || login==""))
        {
            const resp = await apiClient.Login( login, password)
            console.log(resp)
            if(resp[0])
            {
                setLogged(true);
                setUserId(resp[2]);
            }
            else
            {
                setErrorInfo("Incorrect login or password");
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
