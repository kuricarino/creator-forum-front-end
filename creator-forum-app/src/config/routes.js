import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
// import Home from '../components/Home/Home';
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
                    () => props.user ?
                            <Redirect to="/" /> // need to change to redirect to profile page
                        :
                            <Register register={props.register} />
                }
            />
            <Route 
                path='/login'
                render={
                    () => props.user ?
                            <Redirect to="/" /> // need to change to redirect to profile page
                        :
                            <Login login={props.login} />
                }
            />
        </Switch>
    )
}

export default Routes;