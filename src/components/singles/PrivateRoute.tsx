import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../../services/localStorage'

// @ts-ignore
export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => {
            if (!getToken()) {
                return <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
            }
            return <Component {...props} />
        }}/>
    );
}