import React from 'react';
import Profilepic from '../../assets/myProfilePicture.jpeg';
import "../../styling/userProfile.css";

import { useSelector } from 'react-redux';
import { selectUserName } from '../minComponent/UserSlice';

const UserProfile = () => {
    const fullName = useSelector(selectUserName);

    const kelimeler = fullName.split(' ');
    const ilkIkiKelime = kelimeler.slice(0, 2);
 
    console.log('İlk iki kelime:', ilkIkiKelime.join(' '));
    return (
        <nav>

            <div className="profileInfo">
                <p>{ilkIkiKelime.join(' ')}</p>
                <img style={{ height: 30, borderRadius:20 }} src={Profilepic} alt="Logo" />


            </div>

        </nav>
    );
}

export default UserProfile;
