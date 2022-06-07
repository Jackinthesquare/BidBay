import { Link } from 'react-router-dom'
import Signup from './Signup'
import "../App.css"

const Login = () => {

    const handleLogin = () => {
        console.log("handleLogin");
    }

    return (
        <div className='login-form'>
            <form onSubmit={handleLogin}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {/* {renderErrorMessage("pass")} */}
                </div>
                <div className="button-container">
               
                        <input type="submit" value="Login" />
                 
                    <a href="http://localhost:4000/signup"> Sign Up </a>
                </div>
            </form>
        </div>

    )

}
export default Login;