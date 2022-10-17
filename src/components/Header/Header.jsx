import React from 'react';

import { useTelegram } from '../../hooks/useTelegram';

import logo from '../../assets/images/logo.png';

import cls from './Header.module.scss';

const Header = () => {
  const { user } = useTelegram();

  return (
    <div className={cls.header}>
      <img src={logo} alt="" className={cls.logo} />
      <span className={cls.username}>
            Приветсвуем Вас {user?.username} в нашем интернет - магазине
      </span>
    </div>
  );
};

export default Header;

