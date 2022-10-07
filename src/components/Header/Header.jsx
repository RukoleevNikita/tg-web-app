import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button';
import './Header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
    const { user, onClose } = useTelegram();



    return (
        <div className={'header'}>
            <img src={logo} alt="" className={'logo'} />
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    )
}

export default Header;

