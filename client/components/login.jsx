import React from 'react';

export default function Login(props) {
  const { handleChange, handleSubmit } = props;
  return (
    <>
      <div className='login-button-viewswap d-flex poppins-font'>
        <a href='#auth?action=sign-up' className='sign-up-viewswap active-highlight'>Sign Up</a>
        <a href='#auth?action=sign-in'className='sign-in-viewswap inactive-highlight'>Log In</a>
      </div>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className='logo-container'>
          <img className='main-logo' src='../images/icon.png'></img>
          <h1 className='main-title'>Sign In</h1>
        </div>
        <div className="d-flex">
          <label htmlFor="input-username"></label>
          <i className="fa-solid fa-user fa-2xl login-icons"></i>
          <input
            required
            type="text"
            className="user-input"
            id="input-username"
            onChange={handleChange}
            placeholder="Enter Username" />
        </div>
        <div className="d-flex">
          <label htmlFor="input-password"></label>
          <i className="fa-solid fa-key fa-2xl login-icons"></i>
          <input
            required
            type="password"
            className="user-input"
            id="input-password"
            onChange={handleChange}
            placeholder="Enter Password" />
        </div>
        <button type="submit" className="login-button">Log In</button>
      </form>
    </>
  );
}
