import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import './Login.css';


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/')
            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Log In</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>

                <input className='btn-submit' type="submit" value="Login" />

            </form>
            <p>New to Ema-John? <Link to='/signup'>Create new account</Link></p>
        </div>
    );
};

export default Login;