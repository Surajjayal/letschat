import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
    return (
        <header className="header-login-signup" >
            <div className="header-limiter" >
                <h1><a href='/'>Let's<span>Chat</span></a></h1>
                <nav >
                    <Link to="/"><b className="three">Home</b></Link>
                    <Link className="selected">
                        <Link to="/"><b className="three">About App</b></Link>
                    </Link>
                    <Link>
                        <Link to="/"><b className="three">Contact us</b></Link>
                    </Link>
                </nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
        </header>
    )
}
export default Header;