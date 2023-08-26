import './login.css'
import { useContext, useRef } from 'react'
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../Context/AuthContext';
import { CircularProgress } from '@mui/material'

export default function Login() {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    loginCall({email: email.current.value, password: password.current.value}, dispatch);
  };

  console.log(user)
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
            <h1 className="loginLogo">Ayila</h1>
            <span className="loginDesc">Connect with Heartbroken Shayars and Creative Minds.</span>
            </div>
            <div className="loginRight" onSubmit={handleSubmit}>
                <form className="loginBox">
                    <input type="email" 
                    required
                    autoComplete='username'
                    placeholder='Email' 
                    className="loginInput" 
                    ref={email} />
                    <input type="password" 
                    required
                    minLength={5}
                    autoComplete="current-password"
                    placeholder='Password' 
                    className="loginInput" 
                    ref={password}/>
                    <button className="loginButton" disabled={isFetching}>
                    {isFetching ? <CircularProgress color="inherit" size="20px"/> : "Log In"}
                    </button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegisterButton" disabled={isFetching}>{
                    isFetching ? <CircularProgress color="inherit" size="20px"/> : "Create a New Account"}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
