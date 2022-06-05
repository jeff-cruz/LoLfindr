import React from 'react';

export default class userProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    fetch(`/api/users/${this.props.userId}`)
      .then(res => res.json())
      .then(user => this.setState({ user }));
  }

  render() {
    if (!this.state.user) return null;

    const { imageUrl, name, bio, rankId, rankUrl, roleId, roleUrl, championId, championUrl } = this.state.user;

    return (
      <div className='container'>
        <div className='user-details-container'>
          <div className='user-profile-picture'>

          </div>
          <div className='user-name-bio'>

          </div>
        </div>
      </div>
    );
  }
}
