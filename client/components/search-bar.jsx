import React from 'react';
import Select from 'react-select';

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
            <Select
              className='filter-rank-select'
              placeholder="Select Rank"
              options={ this.state.ranks }
              components= {{ Option }}
            />
          </form>
        </div>
      </div>
    );
  }
}

function Option(props) {
  const { data, innerRef, innerProps } = props;
  return (
    <div ref={innerRef} {...innerProps}>
      <img className='select-rank-icon' src={ data.rankUrl}></img>
      <span> {data.rankId} </span>
    </div>
  );
}
// onChange of select update state with selected rank
// onSubmit update the hash #searchresults?rank='rank'
// get userlist to refetch using specific rank
