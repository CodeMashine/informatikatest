import React from 'react';
import { ReactComponent as EnterLogo } from '../images/enterIcon.svg';
import '../styles/header.css';

function header() {
  return (
    <header className='app_header-wrapper'>
      <div className='app_header'>
        <a className='header_tickets-main' href='#'>
          БИЛЕТЫ И АБОНЕМЕНТЫ
        </a>
        <div className='header_nav'>
          <a className='header_how-buy' href='#'>
            Как купить?
          </a>
          <a className='header_rools' href='#'>
            Правила
          </a>
          <a className='header_return-ticket' href='#'>
            Возврат билетов
          </a>
        </div>
        <div className='header_right-block'>
          <div className='header_enter-block'>
            <EnterLogo className='header_enter-logo' />
            <span className='header_enter-text'>Войти</span>
          </div>
          <div className='header_burger'>
            <div className='burger_middle'></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;
