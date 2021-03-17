import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/appSlice';
import { auth, provider } from './firebase';
import './Login.css';
function Login() {
    const dispatch  = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch(login({
                username: result.user.displayName,
                profilePic: result.user.photoURL,
                id: result.user.uid,
            }));
        }).catch(error => console.log('error: ', error));
    };
    return (
        <div className='login'>
            <div className='login__container'>
                <img src="https://www.snapchat.com/global/social-lg.jpg" alt=""/>
                <Button variant="outlined" onClick={signIn}>Sign in</Button>
            </div>
        </div>
    )
}

export default Login
