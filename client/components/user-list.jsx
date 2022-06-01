import React from 'react';

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className='container user-list'>
        <div className='row'>
          {
            this.state.users.map(user => (
              <div key={user.userId} className=' user-card col-12 col-md-6 col-lg-4'>
                <User user={user} />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

function User(props) {
  const { userId, name, imageUrl, rankUrl, champions, roles } = props.user;
  return (
    <a
      href={`#users?userId=${userId}`}
      className='text-dark card mb-4 shadow-sm text-decoration-none'>
      <img src={imageUrl} className='card-img-top' alt={name} />
      <div className='card-body text-white '>
        <h3 className='card-title text-center'> { name } </h3>
        <p>Rank:
          <img className='rank-icon' src={rankUrl}></img>
        </p>
        <p>Roles:
          <img className='role-icon' src={ roles[0].roleUrl }></img>
          <img className='role-icon' src={ roles[1].roleUrl }></img>
        </p>
        <p className='text-center'>Champions:
          <div>
            <img className='champion-icon' src={ champions[0].championUrl }></img>
            <img className='champion-icon' src={ champions[1].championUrl }></img>
            <img className='champion-icon' src={ champions[2].championUrl }></img>
          </div>
        </p>
      </div>
    </a>
  );
}
