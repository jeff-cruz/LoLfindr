import React from 'react';
import Header from './pages/home';
import PageContainer from './components/page-container';
import SearchBar from './components/search-bar';
import UserList from './components/user-list';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // route: parseRoute(window.location.hash)
    };
  }

  renderPage() {
    // const { route } = this.state;
    // if (route.path === '') {
    return (
        <>
          <SearchBar />
          <UserList />
        </>
    );
    // }
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
