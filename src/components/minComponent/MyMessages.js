import React from 'react'
import "../../styling/messages.css";
import picture from "../../assets/myProfilePicture.jpeg";

import { useSelector } from 'react-redux';
import { selectUserName } from '../minComponent/UserSlice';

function MyMessages({text}) {

    const fullName = useSelector(selectUserName);
    const firstName = fullName.split(' ')[0]
    
    return (
        <div className='myMessageBubble'>

            <div className="avatar">
                <img  style={{ width: 32, height: 30, borderRadius:50 }} src={picture} alt="Logo" />
                <p>{firstName}</p>
            </div>

            <div className="messageAbout">
                <p>{text}</p>
            </div>


        </div>
    )
}

export default MyMessages