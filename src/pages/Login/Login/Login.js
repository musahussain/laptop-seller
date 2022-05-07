import React from 'react';
import './Login.css';

const Login = () => {
    const handleSignIn = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password)
    }

    return (
        <div className='signup-container'>
            <div className="signup signin">
                <h1>Sign In</h1>
                <form onSubmit={handleSignIn}>
                    <input required type="email" name='email' id='email' placeholder='Enter Your Email' />
                    <input required type="password" name="password" id="password" placeholder='Enter Your Password' />
                    <input className='submit-btn' type="submit" value="Create Account" />
                </form>
            </div>

            <div className="or">
                <div className='or-element'></div>
                <div>Or</div>
                <div className='or-element'></div>
            </div>

            <div className="google-signup">
                <button className='signup-google-btn'> <img src="https://i.postimg.cc/pVf7Lh8X/google-1.png" alt="google logo" /> Sign In with Google</button>
            </div>
        </div>
    );
};

export default Login;