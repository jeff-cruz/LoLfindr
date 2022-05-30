import React from 'react';
import Header from './pages/home';
import PageContainer from './components/page-container';
import SearchBar from './components/search-bar';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <PageContainer>
          <SearchBar />
        </PageContainer>
      </>
    );
  }
}
