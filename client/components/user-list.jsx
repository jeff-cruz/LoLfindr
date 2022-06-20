import React from 'react';
import { Spinner } from 'react-bootstrap';

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('/api/users')
      .then(res => res.json())
      .then(users => {
        this.setState({ users });
        this.setState({ isLoading: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.routeParams !== this.props.routeParams) {
      fetch(`/api/filter?${this.props.routeParams}`)
        .then(res => res.json())
        .then(users => {
          this.setState({ users });
        });
    }
  }

  render() {
    const isLoading = this.state.isLoading ? '' : 'd-none';
    const hideOnLoad = this.state.isLoading ? 'd-none' : '';
    return (
      <div className='container user-list'>
        <Spinner animation="border" className={`loader + ${isLoading}`} variant="light" />
        <div className={'row ' + hideOnLoad}>
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
      <img src={imageUrl} className='card-img' alt={name} />
      <div className='card-body text-white poppins-font'>
        <h3 className='card-title text-center'> {name} </h3>
        <p className='rank-title'>
          Rank:
          <img className='card-rank-icon' src={rankUrl}></img>
        </p>
        <p className='role-title'>
          Roles:
          <img className='card-role-icon' src={roles[0].roleUrl}></img>
          <img className='card-role-icon' src={roles[1].roleUrl}></img>
        </p>
        <p className='text-center'>
          Champions:
        </p>
        <div className='text-center'>
          <img className='card-champion-icon' src={champions[0].championUrl}></img>
          <img className='card-champion-icon' src={champions[1].championUrl}></img>
          <img className='card-champion-icon' src={champions[2].championUrl}></img>
        </div>
      </div>
    </a>
  );
}
