import React from 'react';
import AppContext from '../lib/app-context';

export default class Header extends React.Component {
  render() {
    // const { handleSignOut } = this.context;

    return (

      <header className='navbar navbar-expand-lg fixed-top'>
        <a href=''>
        <img className="logo" src="images/icon.png" alt="LoLFindr Icon" />
        </a>
        {/* <button className='sign-out' onClick={handleSignOut}>Sign Out</button> */}
      </header>
    );
  }
}

Header.contextType = AppContext;
