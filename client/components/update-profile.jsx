import React from 'react';
import Select from 'react-select';

const customStyles = {
  valueContainer: (provided, state) => {
    return {
      ...provided, display: 'flex'
    };
  }
};

export default class UpdateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedName: '',
      selectedBio: '',
      selectedRank: '',
      selectedRoleOne: '',
      selectedRoleTwo: '',
      selectedChampionOne: '',
      selectedChampionTwo: '',
      selectedChampionThree: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeBio = this.handleChangeBio.bind(this);
    this.handleChangeRank = this.handleChangeRank.bind(this);
    this.handleChangeRoleOne = this.handleChangeRoleOne.bind(this);
    this.handleChangeRoleTwo = this.handleChangeRoleTwo.bind(this);
    this.handleChangeChampionOne = this.handleChangeChampionOne.bind(this);
    this.handleChangeChampionTwo = this.handleChangeChampionTwo.bind(this);
    this.handleChangeChampionThree = this.handleChangeChampionThree.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/api/ranks-update')
      .then(res => res.json())
      .then(ranks => this.setState({ ranks }));

    fetch('/api/roles-update')
      .then(res => res.json())
      .then(roles => this.setState({ roles }));

    fetch('/api/champions-update')
      .then(res => res.json())
      .then(champions => this.setState({ champions }));
  }

  handleChangeName(name) {
    this.setState({ selectedName: name });
    console.log(name);
  }

  handleChangeBio(bio) {
    this.setState({ selectedBio: bio });
  }

  handleChangeRank(rank) {
    this.setState({ selectedRank: rank });
  }

  handleChangeRoleOne(role) {
    this.setState({ selectedRoleOne: role });
  }

  handleChangeRoleTwo(role) {
    this.setState({ selectedRoleTwo: role });
  }

  handleChangeChampionOne(champion) {
    this.setState({ selectedChampionOne: champion });
  }

  handleChangeChampionTwo(champion) {
    this.setState({ selectedChampionTwo: champion });
  }

  handleChangeChampionThree(champion) {
    this.setState({ selectedChampionThree: champion });
  }

  handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem('react-context-jwt');
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': token
      },
      body: JSON.stringify(this.state)
    };
    fetch('/api/user', req)
      .then(res => res.json())
      .then(result => {
        window.location.hash = '';
      });
  }

  render() {
    return (
      <>
        <div className='container update-user-container poppins-font d-flex'>
          <form onSubmit={this.handleSubmit} className='update-form' autoComplete="off">
          <div className='update-form-heading'>
            <h1 className='text-center update-title'>Edit Profile</h1>
          </div>
          <div className='update-details-container update-glass-card'>
            <div className='text-center'>
              <img className='user-profile-picture'></img>

            </div>
            <div className='user-profile-bio'>
              <div>
                <label htmlFor='name' className='update-name'>Name:</label>
                <input className='update-name' value={this.state.selectedName} type='text' id='name' name='name' onChange={this.handleChangeName}/>
              </div>
              <div>
                <label htmlFor='bio'>Bio:</label>
                  <textarea value={this.state.selectedBio} id='bio' name='bio' onChange= {this.handleChangeBio}></textarea>
              </div>
            </div>
          </div>

          <div className='update-details-container update-glass-card d-flex'>
            <h1 className='details-heading text-center'>Rank</h1>
            <p className='details-text'> Select One </p>
            <div className='details-container'>
              <Select
                styles= { customStyles }
                isSearchable = { false }
                className='details-select'
                placeholder='Select Rank'
                id='rankId'
                name='rankId'
                options={ this.state.ranks }
                components= {{ Option: RankOptions, SingleValue: RankOptions }}
                value={ this.state.selectedRank }
                onChange= { this.handleChangeRank }
              />
            </div>
            <h1 className='details-heading text-center'>Roles</h1>
            <p className='details-text'> Select 2 </p>
            <div className='details-container'>
              <Select
                styles={ customStyles }
                isSearchable={ false }
                className='details-select'
                placeholder='Select Role'
                id='roleId'
                name='roleId'
                options={ this.state.roles }
                components={{ Option: RoleOptions, SingleValue: RoleOptions }}
                value={ this.state.selectedRoleOne }
                onChange={ this.handleChangeRoleOne }
              />
          </div>
          <div className='details-container'>
              <Select
                styles={ customStyles }
                isSearchable={ false }
                className='details-select'
                placeholder='Select Role'
                id='roleId'
                name='roleId'
                options={ this.state.roles }
                components={{ Option: RoleOptions, SingleValue: RoleOptions }}
                value={ this.state.selectedRoleTwo }
                onChange={ this.handleChangeRoleTwo }
              />
          </div>
          <h1 className='details-heading text-center'>Champion Pool</h1>
          <p className='details-text'>Select 3</p>
          <div className='details-container'>
            <Select
              styles={ customStyles }
              isSearchable={ false }
              className='details-select'
              placeholder='Select Champion'
              id='championId'
              name='championId'
              options={ this.state.champions }
              components={{ Option: ChampionOptions, SingleValue: ChampionOptions }}
              value={ this.state.selectedChampionOne }
              onChange={ this.handleChangeChampionOne }
            />
          </div>
          <div className='details-container'>
            <Select
              styles={ customStyles }
              isSearchable={ false }
              className='details-select'
              placeholder='Select Champion'
              id='championId'
              name='championId'
              options={ this.state.champions }
              components={{ Option: ChampionOptions, SingleValue: ChampionOptions }}
              value={ this.state.selectedChampionTwo }
              onChange={ this.handleChangeChampionTwo }
            />
          </div>
          <div className='details-container'>
            <Select
              styles={ customStyles }
              isSearchable={ false }
              className='details-select'
              placeholder='Select Champion'
              id='championId'
              name='championId'
              options={ this.state.champions }
              components={{ Option: ChampionOptions, SingleValue: ChampionOptions }}
              value={ this.state.selectedChampionThree }
              onChange={this.handleChangeChampionThree}
            />
          </div>
        </div>
        <div className='d-flex update-button-container'>
          <button className='text-center poppins-font update-button'>Update Profile</button>
        </div>
        </form>
      </div>
      </>
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

// yesterday i was able to get a part of the backend done of the user can update profile feature
// i was able to send a post request to update the name, bio, rankId of the logged in user
// and i was able to get the majority of the front end finished for name, bio and rankId
// i got hardstuck at updating the rankId in state
// three errors:
// 1. the selected rank is an object and im trying to just select the rankId of the object from the single value property in the component attribute of react-select
// 2. the first change in state of a selected rank displays an error ' a component is changing a controlled input to be uncontrolled'
// 3. on the second change, i click submit to try to update the name, bio and rankId, but gets error 'converting circular structure to json', starting at object htmlinputelement
