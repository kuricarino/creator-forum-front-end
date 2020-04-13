import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import Profile from '../components/Profile/Profile'
import Register from '../components/auth/Register/Register';
import Login from '../components/auth/Login/Login';

const Routes = (props) => {
    return (
        <Switch>
            <Route
                exact path='/'
                component={ Home }
            />
            <Route
                path='/register'
                render={
                    () => props.user ? // if true: redirect to profile, else go to /register
                            <Redirect to="/profile" user={props.user} />
                        :
                            <Register to="/register" register={props.register}/>
                }
            />
            <Route 
                path='/login'
                render={
                    () => props.user ? //if true: redirect to profile, else login
                            <Redirect to='/profile' user={props.user} />
                        :
                            <Login login={props.login}/>
                }
            />
            <Route
                path='/profile'
                render={
                    () => props.user ? // if true show profile, else login
                        <Profile user={props.user} />
                    :
                        // <Login login={props.login} />
                        <Redirect to='/'/>
                }
            />
        </Switch>
    )
}

export default Routes;