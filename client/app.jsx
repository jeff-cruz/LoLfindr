import React from 'react';
import Header from './pages/home';
import PageContainer from './components/page-container';
import SearchBar from './components/search-bar';
import UserList from './components/user-list';
import UserProfile from './components/user-profile';
import { parseRoute } from './lib';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return (
        <>
          <SearchBar />
          <UserList />
        </>
      );
    } else if (route.path === 'filter') {
      return (
        <>
          <SearchBar />
          <UserList routeParams={route.params} />;
        </>
      );
    } else if (route.path === 'users') {
      const userId = route.params.get('userId');
      return (
        <>
          <UserProfile userId={userId} />;
        </>
      );
    }
  }

  render() {
    return (
      <>
        <Header />
        <PageContainer>
          { this.renderPage() }
        </PageContainer>
      </>
    );
  }
}

// sign up route path === ''
// sign in route path === 'login'
// edit profile route path === 'editprofile'
// user list route path === 'userlist'
