import React, { useState } from 'react';
import './Header.css';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

import { Link } from 'react-router-dom';

const Header = () => {

    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">

            <div className="header__left">
                <MenuIcon />

                <Link to="/">
                    <img
                        className='header__logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png?20200820120939" alt="" />
                </Link>


            </div>

            <div className="header__input">

                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />

                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>



            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar
                    alt="Khalid Mahmud"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/35/Mr_robot_photo.jpg"
                    className="header__icon"
                />

            </div>






        </div>
    );
};

export default Header;