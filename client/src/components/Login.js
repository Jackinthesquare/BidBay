import { Link } from 'react-router-dom'
import { useState } from "react"
import Signup from './Signup'
import "../App.css"

const Login = ({onLogin}) => {
    const [username, setUsername] = useState("")

    const handleLogin = (e) => {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username })
        })
        .then((r) => r.json())
        .then((user) => onLogin(user))
    }

    return (
        <div className='login-container'>
            <div className='login-form'>
                <form onSubmit={((e) => handleLogin)}>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="uname" required 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                        {/* {renderErrorMessage("uname")} */}
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" required 
                        />
                        {/* {renderErrorMessage("pass")} */}
                    </div>
                    <div className="button-container">

                        <input type="submit" value="Login" />

                        <a href="http://localhost:4000/signup"> Sign Up </a>
                    </div>
                </form>
            </div>
        </div>

    )

}
export default Login;