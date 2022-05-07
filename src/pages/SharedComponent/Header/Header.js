import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const user = '';

    return (
        <div>
            <header className="header">
                <div className="site-title">
                    <Link to='/'><h1><span>W</span>arehouse</h1></Link>
                </div>

                <nav>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/signup'>Sign Up</Link>
                    {
                        user ? <button>Sign Out</button> : <Link to='/login'>Login</Link>
                    }
                </nav>

            </header>
        </div>
    );
};

export default Header;