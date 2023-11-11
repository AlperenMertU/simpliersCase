import React, { useState } from 'react';
import "../styling/chatScreen.css";
import UserProfile from "./minComponent/UserProfile";
import ChatList from './minComponent/ChatList';
import submitIcon from "../assets/submit.png";
import MessagesSection from './MessagesSection';

import { useSelector } from 'react-redux';

import { selectSelectedUser } from '../components/minComponent/UserSlice';

const ChatScreen = () => {
    let selectedChatList = useSelector(selectSelectedUser);



    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);


    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        console.log(value);
    };


    const handleSubmit = () => {
        if (inputValue.trim() !== '') {
            setMessages([...messages, { text: inputValue}]);
            setInputValue('');
        }
    };




    return (
        <div className='container'>
            <div className="window">

                <div className="userprofile">
                    <UserProfile />
                </div>

                <div className="chatlist">
                    <ChatList />
                </div>


                {selectedChatList === "Ahmet" ? (

                    <div className="messagesWindow">
                        <MessagesSection messages={messages} />
                    </div>

                ) : null
                }

                {selectedChatList === "Ahmet" ? (
                    <div className="chatinput">
                        <input onChange={handleInputChange} type="text" value={inputValue} />
                        <img onClick={handleSubmit} style={{ height: 25, marginLeft: 15, background: "white", padding: 5, borderRadius: 15, cursor: "pointer", }}
                            src={submitIcon}
                            alt="Logo"
                        />
                    </div>
                ) : null
                }







            </div>
        </div>
    );
}

export default ChatScreen;
