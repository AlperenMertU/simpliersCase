import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedUser } from './UserSlice';
import pp from "../../assets/profilepicture.png";
import "../../styling/chatlist.css";

const ChatList = () => {
    const [user, setUser] = useState(["Ahmet", "Hakan", "İrem"]);
    
    const dispatch = useDispatch();

    const handleUserClick = (userName) => {
        dispatch(setSelectedUser(userName));
    };

    return (
        <div>
            <ul>
                {user.map((name, index) => (
                    <li key={index} onClick={() => handleUserClick(name)}>
                        <img style={{ height: 30, marginRight: 25 }} src={pp} alt="Logo" />
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChatList;
