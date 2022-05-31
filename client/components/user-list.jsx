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
  const { userId, name, imageUrl, rank, role, championId } = props.user;
  return (
    <a
      href={`#users?userId=${userId}`}
      className='text-dark card mb-4 shadow-sm text-decoration-none'>
      <img src={imageUrl} className='card-img-top' alt={name} />
      <div className='card-body'>
        <h5 className='card-title text-center'> { name } </h5>
        <p>Rank: { rank }</p>
        <p>Roles: { role }</p>
        <p>Champions: { championId }</p>
      </div>
    </a>
  );
}
