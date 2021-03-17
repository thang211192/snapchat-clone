import { Avatar } from '@material-ui/core';
import React from 'react'
import './Chat.css';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import ReactTimeago from "react-timeago";
import { useDispatch } from 'react-redux';
import { selectImage } from './features/appSlice';
import { db } from './firebase';
import { useHistory } from 'react-router';

function Chat({ id, imageUrl, timestamp, username, read}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const open = () => {
        if(!read) {
            dispatch(selectImage(imageUrl));
            db.collection('posts')
                .doc(id)
                .set({
                    read: true,
                },
                {merge: true});
            history.push('chats/view')

        }
    }
    return  <div onClick={open} className='chat'>
                <Avatar className='chat__avatar'/>
                <div className='chat__info'>
                    <h4>{username}</h4>
                    <p>{!read && "ấn vào để đọc - "}{""}
                    <ReactTimeago date= {new Date(timestamp?.toDate()).toUTCString()}/></p>
                </div>
                {!read && <StopRoundedIcon className='chat__readIcon'/>}
            </div>
}

export default Chat
