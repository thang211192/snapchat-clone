import { Avatar } from '@material-ui/core';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Chat from './Chat';
import './Chats.css';
import { db } from './firebase';

function Chats() {
    const [posts, setposts] = useState([]);
    const history = useHistory();
    useEffect(() => {
        db.collection('posts')
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => setposts(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        }))));
    }, []);

    const takeSnap = () => {
        history.push("/")
    }
    const gohome = () => {
        history.push("/");
    }
    return <div className='chats'>
                <div className='chats__header'>
                    <Avatar onClick={gohome} className="chats__avatar"/>
                    <div className='chats__search'>
                        <SearchIcon />
                        <input type='text' placeholder="Friends"/>
                    </div>
                    <ChatBubbleIcon className='chats__chatIcon'/>
                </div>
                <div className='chats__post'>
                    {posts.map(({id, data: { imageUrl, timestamp, username, read}}) => (
                        <Chat
                        key={id}
                        id={id}
                        imageUrl={imageUrl}
                        timestamp={timestamp}
                        username={username}
                        read={read}
                        />
                    ))}
                </div>
                <RadioButtonUncheckedIcon
            className='chats__takePicIcon'
            onClick={takeSnap}
            fontSize="large"
            />
           </div>
}

export default Chats
