import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import magritte from '../../images/icons8-magritte-96.png';

const Header = (props) => {
    return (
        <div className="hero-head">
        <nav className="navbar has-background-white-bis">
        <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                <img src={magritte} alt="Creator Forum" width="30" height="28"/>
                </a>
                <Link className="navbar-item has-text-black" to='/'>Creator Forum</Link>
                <Link className="navbar-item has-text-black" to='/about'>About</Link>
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
                    { // if user logged in, show profile, forum and logout
                        (props.user) ? 
                        <div className="navbar-end">
                            <Link className="navbar-item has-text-black" to='/profile'>Profile</Link>
                            <Link className="navbar-item has-text-black" to='/forum'>Forum</Link>
                            <Link className="navbar-item has-text-black" onClick={props.logout}>Logout</Link>
                        </div>
                        // else show login and signup
                        : <div className="navbar-end">
                            <Link className="navbar-item has-text-black" to='/login'>Login</Link>
                            <Link className="navbar-item has-text-black" to='/register'>Sign Up</Link>
                            {/* <Link className="navbar-item has-text-black" onClick={props.logout}>Logout</Link> */}
                        </div>
                    }
            </div>
        </div>
        </nav>
        </div>
    )
}

export default Header;