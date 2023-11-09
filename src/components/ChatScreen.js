import React from 'react';
import "../styling/chatScreen.css";
import UserProfile from "./minComponent/UserProfile";
import ChatList from './minComponent/ChatList';
import submitIcon from "../assets/submit.png";
import MessagesSection from './MessagesSection';

const ChatScreen = () => {
    return (
        <div className='container'>
            <div className="window">

                <div className="userprofile">
                    <UserProfile />
                </div>

                <div className="chatlist">
                     <ChatList/>
                </div>
               

                <div className="messagesWindow">
                   <MessagesSection/>
                </div>


                <div className="chatinput">
                    <input type='text'></input>
                    <img style={{ height: 25, marginLeft:15, background:"white", padding:5, borderRadius:15, cursor:"pointer" }} src={submitIcon} alt="Logo" />               
                </div>

            </div>
        </div>
    );
}

export default ChatScreen;
