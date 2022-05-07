import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Signup.css';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

      const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);

      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const navigate = useNavigate();
      
      const verificationEmail = async () => {
        await sendEmailVerification();
      }


      const handleSignUp = async (event) => {
        event.preventDefault();
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        verificationEmail();
      }

      const signInGoogle = () => {
            signInWithGoogle();
      }

      if(loading || googleLoading || sending || updating) {
          return <h1 style={{textAlign: "center"}}>Loading...</h1>
      }

      if(user || googleUser) {
          navigate('/');
      }
      

    return (
        <div>
            <div className="signup">
                <h1>Signup</h1>
                <form onSubmit={handleSignUp}>
                    <input onChange={(event) => setName(event.target.value)}  type="text" value={name} placeholder='Your Name' />
                    <br />
                    <input required onChange={(event) => setEmail(event.target.value)} type="email" value={email} placeholder='Your Email Address' />
                    <br />
                    <input required onChange={(event) => setPassword(event.target.value)} value={password} placeholder='Your Password' type="password" name="password" id="user-password" />
                    <br />
                    <p style={{color: "red"}}>{error?.message}{googleError?.message}{verificationError?.message}</p>
                    <input type="submit" value="Create Account" />
                </form>
                <p>Already Have an Account <Link to="/login">Sign In</Link></p>

                <div className="or">
                    <div></div>
                    <p>Or</p>
                    <div></div>
                </div>

                <div className="google-sign">
                    <button onClick={signInGoogle} className='google-btn'>Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;