import { Link , useNavigate} from 'react-router-dom'
import './register.css'
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordAgain) {
      // Set an error message or show an error indicator
      alert('Passwords do not match');
      return;
    }

    const user = {
      username,
      email,
      password
    };

    try {
      await axios.post('/auth/register', user);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
            <h1 className="loginLogo">Ayila</h1>
            <span className="loginDesc">Connect with Heartbroken Shayars and Creative Minds.</span>
            </div>
            <div className="loginRight">
              <form className="loginBox" onSubmit={handleSubmit}>
                <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="loginInput" />
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="loginInput" />
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} placeholder="Password" className="loginInput" />
                <input type="password" required value={passwordAgain} onChange={(e) => setPasswordAgain(e.target.value)} placeholder="Password Again" className="loginInput" />
                <button className="loginButton" type="submit">Sign Up</button>

                <Link to="/login" className="loginlink">
                  <button className="loginRegisterButton">Already have an account? Login here.</button>
                </Link>
              </form>
            </div>
        </div>
    </div>
  )
}
