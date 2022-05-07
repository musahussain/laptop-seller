import React from 'react';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../SharedComponent/Loading/Loading';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

      const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);


        console.log(name, email, password);
    }

    if(loading || googleLoading) {
        return <Loading></Loading>
    }

    if(user || googleUser) {
        navigate('/');
    }

    return (
        <div className='signup-container'>
            <div className="signup">
                <h1>Register</h1>
                <p style={{color: 'red'}}>{error?.message}</p>
                <p style={{color: 'red'}}>{googleError?.message}</p>
                <form onSubmit={handleSignUp}>
                    <input required type="text" name="name" id="name" placeholder=' Enter Your Name' />
                    <input required type="email" name='email' id='email' placeholder='Enter Your Email' />
                    <input required type="password" name="password" id="password" placeholder='Enter Your Password' />
                    <input className='submit-btn' type="submit" value="Create Account" />
                   
                </form>

                <p>Already Registered <Link to="/login">Login</Link></p>
            </div>

            <div className="or">
                <div className='or-element'></div>
                <div>Or</div>
                <div className='or-element'></div>
            </div>

            <div className="google-signup">
                <button onClick={() => signInWithGoogle()} className='signup-google-btn'> <img src="https://i.postimg.cc/pVf7Lh8X/google-1.png" alt="google logo" /> Sign Up with Google</button>
            </div>
        </div>
    );
};

export default Signup;