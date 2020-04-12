import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './Header.css';
// import Login from '../../components/auth/Login/Login';
// import Register from '../../components/auth/Register/Register';

const Header = (props) => {
    return (
        <div className="hero-head">
        <nav className="navbar has-background-white-bis">
        <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                <img src="https://img.icons8.com/color/96/000000/magritte.png" alt="Creator Forum" width="30" height="28"/>
                </a>
                <Link className="navbar-item has-text-black" to='/'>Creator Forum</Link>
                
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
                    { //if user logged in, show profile, forum and logout
                        (props.user) ? 
                        <div className="navbar-end">
                            {/* <a className="navbar-item">Profile</a>  */}
                            <Link className="navbar-item has-text-black" to='/profile'>Profile</Link>
                            {/* <a className="navbar-item"><Link to='/forum'>Forum</Link></a> */}
                            <Link className="navbar-item has-text-black" onClick={props.logout}>Logout</Link>
                            {/* might need to change onClick above */}
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