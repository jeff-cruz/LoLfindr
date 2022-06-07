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
    // this.handleSignIn = this.handleSignIn.bind(this);
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

  renderPage() {
    const { route } = this.state;
    if (route.path === 'auth') {
      const action = route.params.get('action');
      return (
        <Auth action={ action }/>
      );
    } else if (route.path === 'home') {
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
    const { handleSignIn, handleSignOut } = this;
    const contextValue = { user, route, handleSignIn, handleSignOut };
    return (
      <AppContext.Provider value={contextValue}>
        <>
            { this.renderPage() }
        </>
      </AppContext.Provider>
    );
  }
}

// look at params variable in parse-route.js
// mdn search params
// how to set params to be read by parse-route
// attach params value to action props in app.jsx
