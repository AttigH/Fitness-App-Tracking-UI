import React from 'react';
import './styles/FriendsList.css';
import { FaUserFriends, FaAngleRight } from "react-icons/fa";
import Alma from './Assets/Alma.jpg';
import Hamza from './Assets/Hamza.jpg';
import Ahmed from './Assets/Ahmed.jpg';
import Sadok from './Assets/Sadok.jpg';

const FriendsList = () => {
    const friends = [
        { name: "Alma", activity: "Skipping", time: "10 min ago", image: Alma },
        { name: "Hamza", activity: "Slow Jogging", time: "22 min ago", image: Hamza },
        { name: "Ahmed", activity: "Hiking", time: "32 min ago", image: Ahmed},
        { name: "Sadok", activity: "Quick Sprint", time: "37 min ago", image: Sadok },
    ];

    return (
        <div className="friends-list">
            <div className="header-section">
                <h2><FaUserFriends /> Friends</h2>
                <button className="view-all-button">View All <FaAngleRight /></button>
            </div>
            <div className="activity-tabs">
                <button className="active">Activities</button>
                <button>Online</button>
            </div>
            <ul>
                {friends.map((friend, index) => (
                    <li key={index}>
                        <img className="friend-image" src={friend.image} alt={friend.name} />
                        <div className="friend-info">
                            <span className="friend-name">{friend.name}</span>
                            <span className="friend-activity">{friend.activity}</span>
                            <span className="friend-time">{friend.time}</span>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="fitness-progress">
                <h2>Progress</h2>
                <div className="progress-chart">
                    <div className="chart-circle">
                        <div className="chart-segment stretching"></div>
                        <div className="chart-segment cardio"></div>
                        <div className="chart-segment treadmill"></div>
                        <div className="chart-segment strength"></div>
                        <div className="chart-center">
                        </div>
                    </div>
                    <ul className="progress-details">
                        <li><span className="dot cardio-dot"></span>Cardio | 30 hrs</li>
                        <li><span className="dot stretching-dot"></span>Stretching | 40 hrs</li>
                        <li><span className="dot treadmill-dot"></span>Treadmill | 30 hrs</li>
                        <li><span className="dot strength-dot"></span>Strength | 20 hrs</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FriendsList;
