import React from 'react';
import Select from 'react-select';
// import Redirect from './redirect';

const customStyles = {
  valueContainer: (provided, state) => {
    return {
      ...provided, display: 'flex'
    };
  }
};

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ranks: [],
      roles: [],
      champions: [],
      selectedRank: '',
      selectedRole: '',
      selectedChampion: ''
    };
    this.handleChangeRank = this.handleChangeRank.bind(this);
    this.handleChangeRole = this.handleChangeRole.bind(this);
    this.handleChangeChampion = this.handleChangeChampion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/api/ranks')
      .then(res => res.json())
      .then(ranks => this.setState({ ranks }));

    fetch('/api/roles')
      .then(res => res.json())
      .then(roles => this.setState({ roles }));

    fetch('/api/champions')
      .then(res => res.json())
      .then(champions => this.setState({ champions }));
  }

  handleChangeRank(rank) {
    this.setState({ selectedRank: rank });
  }

  handleChangeRole(role) {
    this.setState({ selectedRole: role });
  }

  handleChangeChampion(champion) {
    this.setState({ selectedChampion: champion });
  }

  handleSubmit(event) {
    // event.preventDefault();
    // console.log('SelectedRank:', this.state.selectedRank);
    // return (
    // <Redirect to={`#searchresults?rank=${this.state.selectedRank}`} />
    // );
  }

  render() {
    const { rankId } = this.state.selectedRank;
    const { roleId } = this.state.selectedRole;
    const { championId } = this.state.selectedChampion;
    return (
      <div className='navbar sticky-top search-bar d-flex'>
        <form className='poppins-font filter-form'>
          <div className='search-container'>
            <div className='filter-container'>
              <Select
                styles= { customStyles }
                isSearchable = { false }
                className='filter-select'
                placeholder='Select Rank'
                options={ this.state.ranks }
                components= {{ Option: RankOptions, SingleValue: RankOptions }}
                value={ this.state.selectedRank }
                onChange= { this.handleChangeRank }
              />
            </div>
            <div className='filter-container'>
              <Select
                styles={ customStyles }
                isSearchable={ false }
                className='filter-select'
                placeholder='Select Role'
                options={ this.state.roles }
                components={{ Option: RoleOptions, SingleValue: RoleOptions }}
                value={ this.state.selectedRole }
                onChange={ this.handleChangeRole }
              />
          </div>
          <div className='filter-container'>
            <Select
              styles={ customStyles }
              isSearchable={ false }
              className='filter-select'
              placeholder='Select Champion'
              options={ this.state.champions }
              components={{ Option: ChampionOptions, SingleValue: ChampionOptions }}
              value={ this.state.selectedChampion }
              onChange={ this.handleChangeChampion }
            />
          </div>
          <div className='button-container'>
            <a href={`#filter?rank=${rankId}&role=${roleId}&champion=${championId}`} onClick={this.handleSubmit} className='search-button'>Search</a>
          </div>
        </div>
      </form>
    </div>
    );
  }
}

function RankOptions(props) {
  const { data, innerRef, innerProps } = props;
  return (
    <div value={data.rankId} ref={innerRef} {...innerProps}>
      <img className='filter-icons' src={ data.rankUrl }></img>
      <span> {data.rankId} </span>
    </div>
  );
}

function RoleOptions(props) {
  const { data, innerRef, innerProps } = props;
  return (
    <div value={data.roleId} ref={innerRef} {...innerProps}>
      <img className='filter-icons' src={data.roleUrl}></img>
      <span> {data.roleId} </span>
    </div>
  );
}

function ChampionOptions(props) {
  const { data, innerRef, innerProps } = props;
  return (
    <div value={data.championId} ref={innerRef} {...innerProps}>
      <img className='filter-icons' src={data.championUrl}></img>
      <span> {data.championId} </span>
    </div>
  );
}
//
// onChange of select update state with selected rank
// onSubmit update the hash #searchresults?rank='rank'
// get userlist to refetch using specific rank
