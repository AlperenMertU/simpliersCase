import React from 'react'
import "../../styling/messages.css";
import picture from "../../assets/cc.jpeg";

function MyMessages() {
    return (
        <div className='myMessageBubble'>

            <div className="avatar">
                <img style={{ width: 40, height: 35 }} src={picture} alt="Logo" />
                <p>az önce</p>
            </div>

            <div className="messageAbout">
                <p>Selamlar</p>
            </div>


        </div>
    )
}

export default MyMessages