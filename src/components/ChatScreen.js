import React from 'react';
import "../styling/chatScreen.css";
import UserProfile from "./minComponent/UserProfile";   
import ChatList from './minComponent/ChatList';

const ChatScreen = () => {
    return (
        <div className='container'>
            <div className="window">

                <div className="userprofile">
                    <UserProfile />
                </div>

                <div className="chatlist">
                    {
                        <ChatList />
                    }
                </div>


                <div className="chatinput">
                    <input type='text'></input>
                </div>

            </div>
        </div>
    );
}

export default ChatScreen;
