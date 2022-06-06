import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <div className='login-button-viewswap d-flex poppins-font'>
          <a className='sign-up-viewswap active-highlight'>Sign Up</a>
          <a className='sign-in-viewswap inactive-highlight'>Log In</a>
        </div>
        <div className='sign-up-container d-flex text-center poppins-font'>
          <form className='login-form'>
            <div className='logo-container'>
              <img className='main-logo' src='../images/icon.png'></img>
              <h1 className='main-title'>Sign Up</h1>
            </div>
            <div className="d-flex">
              <label htmlFor="input-username"></label>
              <i className="fa-solid fa-user fa-2xl login-icons"></i>
                <input type="text" className="user-input" id="input-username" aria-describedby="emailHelp" placeholder="Choose Username" />
            </div>
            <div className="d-flex">
              <label htmlFor="input-password"></label>
              <i className="fa-solid fa-key fa-2xl login-icons"></i>
                <input type="password" className="user-input" id="input-password" placeholder="Set A Password" />
            </div>
            <button type="submit" className="login-button">Create Account</button>
          </form>
        </div>
      </>
    );
  }
}
