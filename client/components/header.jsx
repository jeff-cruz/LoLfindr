import React from 'react';
import AppContext from '../lib/app-context';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      visible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const token = localStorage.getItem('react-context-jwt');
    const req = {
      method: 'GET',
      headers: {
        'X-Access-Token': token
      }
    };
    fetch('/api/user-details', req)
      .then(res => res.json())
      .then(user => this.setState({ user }));
  }

  handleClick() {
    if (this.state.visible === false) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }
  }

  render() {
    if (!this.state.user) return null;

    const { imageUrl } = this.state.user;

    const imgClass = imageUrl === null
      ? 'images/placeholder.png'
      : imageUrl;

    const drawerClass = this.state.visible === false
      ? 'drawer close'
      : 'drawer open';

    const overlayClass = this.state.visible === false
      ? 'hidden'
      : 'grey';

    return (
      <header className='navbar navbar-expand-lg fixed-top d-flex justify-content-between'>
          <div>
            <a href=''>
              <img className="logo" src="images/icon.png" alt="LoLFindr Icon" />
            </a>
          </div>
          <a onClick={this.handleClick}>
            <img className='profile-icon' src={ imgClass } alt='Profile Picture'/>
          </a>
          <div className={drawerClass}>
            <img className='drawer-logo' src='images/icon.png'/>
            <a className='drawer-links poppins-font' onClick={this.handleClick} href=''>Home</a>
            <a className='drawer-links poppins-font' onClick={this.handleClick} href='#profile'>My Profile</a>
            <a className='drawer-links poppins-font' >Log Out</a>
          </div>
          <div onClick={this.handleClick} className={overlayClass}></div>
      </header>
    );
  }
}

Header.contextType = AppContext;
