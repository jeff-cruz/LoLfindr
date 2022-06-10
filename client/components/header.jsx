import React from 'react';
import AppContext from '../lib/app-context';

export default class Header extends React.Component {
  render() {

    return (

      <header className='navbar navbar-expand-lg fixed-top'>
        <a href=''>
        <img className="logo" src="images/icon.png" alt="LoLFindr Icon" />
        </a>
      </header>
    );
  }
}

Header.contextType = AppContext;
