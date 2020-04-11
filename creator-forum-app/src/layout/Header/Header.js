import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return (
        <div className="hero-head">
        <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item"><Link to='/'>Creator Forum</Link>
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
                    {
                        (props.user)
                        ? <div className="navbar-end">
                            {/* <a className="navbar-item">Profile</a>  */}
                            {/* <a className="navbar-item"><Link to='/forum'>Forum</Link></a> */}
                            <a className="navbar-item" onClick={props.logout}>Logout</a>
                            {/* might need to change onClick above */}
                        </div>
                        : <div className="navbar-end">
                            <a className="navbar-item"><Link to='/login'>Login</Link></a>
                            <a className="navbar-item"><Link to='/register'>Sign Up</Link>/></a>
                        </div>
                    }
            </div>
        </div>
        </div>
    )
}

export default Header;