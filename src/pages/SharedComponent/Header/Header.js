import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";
import Loading from "../Loading/Loading";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const [showMenu, setShowMenu] = useState(false);
  const showResponsiveMenu = () => {
        setShowMenu(!showMenu);
  }

  if(loading) {
    return <Loading></Loading>
  }



  return (
    <div>
      <header className="header">
        <div className="site-title">
          <Link to="/">
            <h1>
              <span>T</span>ronic
            </h1>
          </Link>
        </div>

        <nav className={showMenu ? `mobile-nav` : 'nav'}>
          <Link to="/blog">Blog</Link>
        
          {user ? 
            <>
              <Link to="/manageitems">Manage Items</Link>
              <Link to="/additems">Add Items</Link>
              <Link to="/myitems">My Items</Link>
              <button className="signout-btn" onClick={() => signOut(auth)}>
              Sign Out
            </button>
            </>
           : 
            <>
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Login</Link>
              
            </>
          }
        </nav>

        <div onClick={showResponsiveMenu} className={`mobile-menu ${showMenu ? 'inactive-menu' : 'active-menu'}`}>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div onClick={showResponsiveMenu} className={`close-mobile-menu ${showMenu ? 'active' : 'inactive'}`}>
          X
        </div>
      </header>
    </div>
  );
};

export default Header;
