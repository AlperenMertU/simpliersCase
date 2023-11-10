import React from 'react';
import Profilepic from '../../assets/myProfilePicture.jpeg';
import "../../styling/userProfile.css";

import { useSelector } from 'react-redux';
import { selectUserName } from '../minComponent/UserSlice';

const UserProfile = () => {
    const fullName = useSelector(selectUserName);
    const firstName = fullName.split(' ')[0]

    return (
        <nav>

            <div className="profileInfo">
                <p>{firstName}</p>
                <img style={{ height: 30, borderRadius:20 }} src={Profilepic} alt="Logo" />


            </div>

        </nav>
    );
}

export default UserProfile;
