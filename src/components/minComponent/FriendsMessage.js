import React from 'react'
import picture from "../../assets/profilepicture.png";
import picture2 from "../../assets/myProfilePicture.jpeg";

import { useSelector } from 'react-redux';
import { selectUserName } from '../minComponent/UserSlice';

import "../../styling/messages.css";

function FriendsMessage() {
    const fullName = useSelector(selectUserName);
    const kelimeler = fullName.split(' ');
    const ilkIkiKelime = kelimeler.slice(0, 2);
 
 
    return (

        <div className='dummyMessge'>
            <div className='messageBubble'>

                <div className="avatar">
                    <img style={{ width: 40, height: 30 }} src={picture} alt="Logo" />
                    <p>Ahmet</p>
                </div>

                <div className="messageAbout">
                    <p>Esenlikler!</p>
                </div>


            </div>

            <div className='messageBubble' style={{ flexDirection: "row-reverse" }}>

                <div className="avatar">
                    <img style={{ width: 32, height: 30, borderRadius:50 }} src={picture2} alt="Logo" />
                    <p>{ilkIkiKelime.join(' ')}</p>
                </div>

                <div className="messageAbout">
                    <p>Selamlar</p>
                </div>


            </div>

            <div className='messageBubble' >

                <div className="avatar">
                    <img style={{ width: 40, height: 30 }} src={picture} alt="Logo" />
                    <p>Ahmet</p>
                </div>

                <div className="messageAbout">
                    <p>Günün nasıl geçti</p>
                </div>


            </div>

            <div className='messageBubble' style={{ flexDirection: "row-reverse" }}>

                <div className="avatar">
                    <img  style={{ width: 32, height: 30, borderRadius:50 }} src={picture2} alt="Logo" />
                    <p>{ilkIkiKelime.join(' ')}</p>
                </div>

                <div className="messageAbout">
                    <p>Gayet iyi</p>
                </div>


            </div>

        </div>


    )
}

export default FriendsMessage