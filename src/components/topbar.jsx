import React from 'react';
import { useState } from 'react';
import './topbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
// import News from '../News/News';
// import Home from './Home';
// import Phome from '../Profile/Phome';
import Menu from './menu';
export default function TopBar() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (option) => { 
        setSelectedOption(option);
    };
    return (
        <div className='nav_containar'>
            <a href='/Home'><div className="web_logo"></div></a>
            <Menu></Menu>
            <div className="nav_option">
                <ul className="ul_option">
                    <li><a href="/Home"
                        className={`text-muted no-underline ${selectedOption === 'home' ? 'selected' : ''}`}
                        onClick={() => handleOptionClick('home')}>Home</a></li>
                    <li><a href="/Phome"
                        className={`text-muted no-underline ${selectedOption === 'Phome' ? 'selected' : ''}`}
                        onClick={() => handleOptionClick('Phome')}> Profile</a></li>
                    <li><a href="/News"
                        className={`text-muted no-underline ${selectedOption === 'News' ? 'selected' : ''}`}
                        onClick={() => handleOptionClick('News')}>Notification</a></li>
                    <li><a href="/ContactUs"
                        className={`text-muted no-underline ${selectedOption === 'about' ? 'selected' : ''}`}
                        onClick={() => handleOptionClick('ContactUs')}>Contact Us</a></li>
                </ul>
               
                
            </div>
            <div className="profile">
                <ul className="ul_option">
                    <li><div className="notify"></div></li>
                    <li><div className="user_profile">
                        <img src="https://ui-avatars.com/api/?background=random&name=User+Talahti" alt="" />
                    </div></li>
                </ul>
            </div>
        </div>
    );
}