import React, { useState, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../SharedComponent/Loading/Loading';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );

      const navigate = useNavigate();

    const handleSignIn = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
       
        console.log(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

    
// hello
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
                    <input ref={emailRef} required type="email" name='email' id='email' placeholder='Enter Your Email' />
                    <input required type="password" name="password" id="password" placeholder='Enter Your Password' />
                    <input className='submit-btn' type="submit" value="Login" />
                </form>

                <p>Don't have an account <Link to="/signup">Sign Up</Link></p>
                <p>Forgot Password <button onClick={resetPassword}>Reset Password</button></p>
            </div>

            <div className="or">
                <div className='or-element'></div>
                <div>Or</div>
                <div className='or-element'></div>
            </div>

            <div className="google-signup">
                <button onClick={() => signInWithGoogle()} className='signup-google-btn'> <img src="https://i.postimg.cc/pVf7Lh8X/google-1.png" alt="google logo" /> Sign In with Google</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;