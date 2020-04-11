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
                path='/profile'
                render={
                    () => props.user ?
                        // if logged in
                        <Profile user={props.user}/>
                    :
                        // if not logged in
                        <Redirect to='/login'/>
                }
            />
            <Route
                path='/register'
                render={
                    () => props.user ?
                            <Redirect to="/profile" /> // need to change to redirect to profile page
                        :
                            <Register register={props.register} />
                }
            />
            <Route 
                path='/login'
                render={
                    () => props.user ?
                            <Redirect to="/profile" /> // need to change to redirect to profile page
                        :
                            <Login login={props.login} />
                }
            />
        </Switch>
    )
}

export default Routes;