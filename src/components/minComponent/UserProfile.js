import React from 'react';
import Profilepic from '../../assets/cc.jpeg';
import "../../styling/userProfile.css";

const UserProfile = () => {
    return (
        <nav>

            <div className="profileInfo">
                <p>Mert</p>
                <img style={{ height: 30, borderRadius:20 }} src={Profilepic} alt="Logo" />


            </div>

        </nav>
    );
}

export default UserProfile;
