import React from 'react';
import Header from './pages/home';
import PageContainer from './components/page-container';
import SearchBar from './components/search-bar';
import UserList from './components/user-list';
import { parseRoute } from './lib/parse-route';
export default class App extends React.Component {

  renderPage() {
    return <SearchBar />;
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
