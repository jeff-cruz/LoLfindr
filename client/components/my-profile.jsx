import React from 'react';

export default class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('react-context-jwt');
    const req = {
      method: 'GET',
      headers: {
        'X-Access-Token': token
      }
    };
    fetch('/api/user-profile', req)
      .then(res => res.json())
      .then(user => this.setState({ user }));
  }

  render() {
    if (!this.state.user) return null;

    const { imageUrl, name, bio, rankId, rankUrl, roles, champions } = this.state.user;

    return (
      <div className='container user-profile poppins-font d-flex'>
        <div className='user-details-container glass-card'>
          <div className='text-center'>
            <img className='user-profile-picture' src={imageUrl}></img>
            <p className='user-profile-name'>{name} </p>
          </div>
          <div className='user-profile-bio'>
            <h1>Bio:</h1>
            <p>{bio}</p>
          </div>
        </div>

        <div className='rank-role-column'>
          <div className='user-rank-container glass-card text-center'>
            <h1 className='profile-headings'>Rank</h1>
            <div className='profile-rank-icon-container'>
              <img className='profile-rank-icon' src={rankUrl}></img>
            </div>
            <p className='profile-rank'>{rankId}</p>
          </div>

          <div className='user-role-container glass-card text-center'>
            <h1 className='profile-headings'>Roles</h1>
            <div className='profile-role-section'>
              <div className='profile-role-icon-container'>
                <img className='profile-role-icon' src={roles[0].roleUrl}></img>
                <p className='profile-role'>{roles[0].roleId}</p>
              </div>
              <div className='profile-role-icon-container'>
                <img className='profile-role-icon' src={roles[1].roleUrl}></img>
                <p className='profile-role'>{roles[1].roleId}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='user-champion-container glass-card text-center'>
          <h1 className='profile-headings'>Champion Pool</h1>
          <div className='profile-champion-section'>
            <img className='profile-champion-icon' src={champions[0].championUrl}></img>
            <p className='profile-champion'>{champions[0].championId}</p>
            <img className='profile-champion-icon' src={champions[1].championUrl}></img>
            <p className='profile-champion'>{champions[1].championId}</p>
            <img className='profile-champion-icon' src={champions[2].championUrl}></img>
            <p className='profile-champion'>{champions[2].championId}</p>
          </div>
        </div>

      </div>
    );
  }
}
