import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../SharedComponent/Loading/Loading';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

      const navigate = useNavigate();

    const handleSignIn = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)

        console.log(email, password)
    }

    if(loading || googleLoading) {
        return <Loading></Loading>
    }

    if(user || googleUser) {
        navigate('/');
    }

    return (
        <div className='signup-container'>
            <div className="signup signin">
                <h1>Sign In</h1>
                <p style={{color: 'red'}}>{error?.message }</p>
                <p style={{color: 'red'}}>{googleError?.message}</p>
                <form onSubmit={handleSignIn}>
                    <input required type="email" name='email' id='email' placeholder='Enter Your Email' />
                    <input required type="password" name="password" id="password" placeholder='Enter Your Password' />
                    <input className='submit-btn' type="submit" value="Login" />
                </form>

                <p>Don't have an account <Link to="/signup">Sign Up</Link></p>
            </div>

            <div className="or">
                <div className='or-element'></div>
                <div>Or</div>
                <div className='or-element'></div>
            </div>

            <div className="google-signup">
                <button onClick={() => signInWithGoogle()} className='signup-google-btn'> <img src="https://i.postimg.cc/pVf7Lh8X/google-1.png" alt="google logo" /> Sign In with Google</button>
            </div>
        </div>
    );
};

export default Login;