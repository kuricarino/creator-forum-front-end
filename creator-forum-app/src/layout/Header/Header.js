import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './Header.css';
// import Login from '../../components/auth/Login/Login';
// import Register from '../../components/auth/Register/Register';

const Header = (props) => {
    return (
        <div className="hero-head">
        <div className="container">
            <div className="navbar-brand">
                {/* <a className="navbar-item"><Link to='/'>Creator Forum</Link>
                </a> */}
                <Link to='/'>Creator Forum</Link>
                
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
                    { //if user logged in, show profile, forum and logout
                        (props.user)
                        ? <div className="navbar-end">
                            {/* <a className="navbar-item">Profile</a>  */}
                            <Link to='/profile'>Profile</Link>
                            {/* <a className="navbar-item"><Link to='/forum'>Forum</Link></a> */}
                            <a className="navbar-item" onClick={props.logout}>Logout</a>
                            {/* might need to change onClick above */}
                        </div>
                        // else show login and signup
                        : <div className="navbar-end">
                            {/* <a className="navbar-item"><Link to='/login'>Login</Link></a>
                            <a className="navbar-item"><Link to='/register'>Sign Up</Link></a> */}
                            {/* <Link to='/login'>Login</Link> */}
                            <Link to='/register'>Sign Up</Link>
                            {/* <Switch>
                                <Route path="/login" login={props.login} component={ Register } />
                            </Switch>
                            
                            <Switch>
                                <Route path="/register" register={props.register} component={ Register } />
                            </Switch> */}
                        </div>
                    }
            </div>
        </div>
        </div>
    )
}

export default Header;