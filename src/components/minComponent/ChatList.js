import React, { useState } from 'react';
import pp from "../../assets/profilepicture.png";
import  "../../styling/chatlist.css";

const ChatList = () => {
    const [user, setUser] = useState(["Ahmet", "Hakan", "İrem"]);

    return (
        <div>
            <ul>
                {user.map((name, index) => (
                    <li key={index}>
                        <img style={{ height:30, marginRight:25 }} src={pp} alt="Logo" />
                         {name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChatList;
