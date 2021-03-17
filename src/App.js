import React, {useEffect} from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {
  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((result) => {
      if(result) {
        dispatch(login({
          username: result.username,
          profilePic: result.profilePic,
          id: result.id,
      }));
      }else{
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
        ) : (
          <>
          <img className="app__logo" src="https://www.snapchat.com/global/social-lg.jpg" alt=""/>
            <div className="app__body">
              <div className='app__bodyBackground'>
              <Switch>
                <Route exact path="/chats/view">
                  <ChatView />
                </Route>
                <Route exact path="/chats">
                  <Chats/>
                </Route>
                <Route exact path="/preview">
                  <Preview/>
                </Route>
                <Route exact path="/">
                  <WebcamCapture/>
                </Route>
              </Switch>
              </div>
            </div>
          </>
        )}
      </Router>
      
    </div>
  );
}

export default App;
