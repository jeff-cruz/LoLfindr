import React from 'react';
import Header from './components/header';
import PageContainer from './components/page-container';
import UserProfile from './components/user-profile';
import Auth from './pages/auth';
import { parseRoute } from './lib';
import AppContext from './lib/app-context';
import jwtDecode from 'jwt-decode';
import NotFound from './pages/not-found';
import Home from './pages/home';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuthorizing: true,
      route: parseRoute(window.location.hash)
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    // this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
    const token = window.localStorage.getItem('react-context-jwt');
    const user = token ? jwtDecode(token) : null;
    this.setState({ user, isAuthorizing: false });
  }

  handleSignIn(result) {
    const { user, token } = result;
    window.localStorage.setItem('react-context-jwt', token);
    this.setState({ user });
  }

  // handleSignOut() {
  //   window.localStorage.removeItem('react-context-jwt');
  //   this.setState({ user: null });
  // }

  renderPage() {
    const { route } = this.state;
    if (route.path === 'auth') {
      const action = route.params.get('action');
      return (
        <Auth action={ action }/>
      );
    } else if (route.path === '') {
      return (
        <>
          <Home/>
        </>
      );
    } else if (route.path === 'edit-profile') {
      return (
        <>
          <Header />
          <PageContainer />
        </>
      );
    } else if (route.path === 'users') {
      const userId = route.params.get('userId');
      return (
        <>
          <Header />
          <PageContainer>
          <UserProfile userId={userId} />;
          </PageContainer>
        </>
      );
    } else {
      return <NotFound />;
    }
  }

  render() {
    if (this.state.isAuthorizing) return null;
    const { user, route } = this.state;
    const { handleSignIn } = this;
    const contextValue = { user, route, handleSignIn };
    return (
      <AppContext.Provider value={contextValue}>
        <>
            { this.renderPage() }
        </>
      </AppContext.Provider>
    );
  }
}
