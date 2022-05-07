import React, { useState } from "react";


const Login = () => {
  

    c

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };


  
  const signInGoogle = () => {
        signInWithGoogle();
        
  }

  const resetPassword = async () => {
    if (email) {
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }
    else{
        toast('please enter your email address');
    }
}

  if (loading || googleLoading || sending) {
    return <h1 style={{textAlign: "center"}}>Loading...</h1>
}

if (user || googleUser) {
    navigate(from, { replace: true });
}

  return (
    <div>
      <div className="signup">
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <input required
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            value={email}
            placeholder="Your Email Address"
          />
          <br />
          <input required
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            placeholder="Your Password"
            type="password"
            name="password"
            id="user-password"
          />
          <br />
          <p style={{ color: "red" }}>{error?.message}{googleError?.message}</p>
          <input type="submit" value="Login" />
        </form>
        <p>
          Don't have an Account <Link to="/signup">Sign Up</Link>
        </p>
        <p>Forgot Password <button style={{border: "none", textDecoration: "underline", backgroundColor: "white", cursor: "pointer"}} onClick={resetPassword}>Reset Password</button></p>
      </div>

      <div className="or">
        <div></div>
        <p>Or</p>
        <div></div>
      </div>

      <div className="google-sign">
        <button onClick={signInGoogle} className="google-btn">
          Google Sign In
        </button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
