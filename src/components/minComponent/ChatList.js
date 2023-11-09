import React, { useState } from 'react';
import pp from "../../assets/profilepicture.png";

const ChatList = () => {
    const [user, setUser] = useState(["Mert", "Hakan", "İrem"]);

    return (
        <div>
            <ul>
                {user.map((name, index) => (
                    <li key={index}>
                        <img style={{ height:25 }} src={pp} alt="Logo" />
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChatList;
