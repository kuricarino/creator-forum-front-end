import React from 'react';
import { Link } from 'react-router-dom';
import magritte from '../../images/magritte-96.png';
import './Header.css';

const Header = (props) => {
    return (
        <div className="hero-head">
        <nav className="navbar has-background-white-bis">
        <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                <img src={magritte} alt="Creator Forum" width="30" height="28"/>
                </a>
                <Link className="navbar-item has-text-black has-text-weight-semibold is-size-5" to='/'>Creator Forum</Link>
                {/* <Link className="navbar-item has-text-black has-text-weight-semibold" to='/about'>About</Link> */}
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div className="navbar-menu" id="navbarMenuHeroA">
                    { // if user logged in, show profile, forum and logout
                        (props.user) ? 
                        <div className="navbar-end">
                            <Link className="navbar-item has-text-black has-text-weight-semibold" to='/about'>About</Link>
                            <Link className="navbar-item has-text-black has-text-weight-semibold" to='/profile'>Profile</Link>
                            <Link className="navbar-item has-text-black has-text-weight-semibold" to='/forum'>Forum</Link>
                            <Link className="navbar-item has-text-black has-text-weight-semibold" onClick={props.logout}>Logout</Link>
                        </div>
                        // else show login and signup
                        : <div className="navbar-end">
                            <Link className="navbar-item has-text-black has-text-weight-semibold" to='/about'>About</Link>
                            <Link className="navbar-item has-text-black has-text-weight-semibold" to='/login'>Login</Link>
                            <Link className="navbar-item has-text-black has-text-weight-semibold" to='/register'>Sign Up</Link>
                        </div>
                    }
            </div>
        </div>
        </nav>
        </div>
    )
}

export default Header;