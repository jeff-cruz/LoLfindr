import React from 'react';
import FilterRank from './filter-rank';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ranks: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/api/ranks')
      .then(res => res.json())
      .then(ranks => this.setState({ ranks }));
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='navbar sticky-top search-bar d-flex'>
        <div>
          <form className='poppins-font filter-rank'>
            <FilterRank />
          </form>
        </div>
      </div>
    );
  }
}
