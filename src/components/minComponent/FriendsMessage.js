import React from 'react'
import picture from "../../assets/profilepicture.png";
import picture2 from "../../assets/cc.jpeg";

import "../../styling/messages.css";

function FriendsMessage() {
    return (

        <div className='dummyMessge'>
            <div className='messageBubble'>

                <div className="avatar">
                    <img style={{ width: 40, height: 30 }} src={picture} alt="Logo" />
                    <p>az önce</p>
                </div>

                <div className="messageAbout">
                    <p>Esenlikler!</p>
                </div>


            </div>

            <div className='messageBubble' style={{ flexDirection: "row-reverse" }}>

                <div className="avatar">
                    <img style={{ width: 40, height: 35, borderRadius:50 }} src={picture2} alt="Logo" />
                    <p>az önce</p>
                </div>

                <div className="messageAbout">
                    <p>Selamlar</p>
                </div>


            </div>

            <div className='messageBubble' >

                <div className="avatar">
                    <img style={{ width: 40, height: 30 }} src={picture} alt="Logo" />
                    <p>az önce</p>
                </div>

                <div className="messageAbout">
                    <p>Günün nasıl geçti</p>
                </div>


            </div>

            <div className='messageBubble' style={{ flexDirection: "row-reverse" }}>

                <div className="avatar">
                    <img style={{ width: 40, height: 35, borderRadius:50 }} src={picture2} alt="Logo" />
                    <p>az önce</p>
                </div>

                <div className="messageAbout">
                    <p>Gayet iyi</p>
                </div>


            </div>

        </div>


    )
}

export default FriendsMessage