import React from 'react';
// import Select from 'react-select';

// const customStyles = {
//   valueContainer: (provided, state) => {
//     return {
//       ...provided, display: 'flex'
//     };
//   }
// };

export default class UpdateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ranks: [],
      roles: [],
      champions: [],
      selectedName: '',
      selectedBio: ''
      // selectedRank: null
      // selectedRoleOne: null,
      // selectedRoleTwo: null,
      // selectedChampionOne: null,
      // selectedChampionTwo: null,
      // selectedChampionThree: null
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeBio = this.handleChangeBio.bind(this);
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

  handleChangeName(name) {
    this.setState({ selectedName: name });
  }

  handleChangeBio(bio) {
    this.setState({ selectedBio: bio });
  }

  // handleChangeRank(rank) {
  //   this.setState({ selectedRank: rank });
  // }

  // handleChangeRole(role) {
  //   this.setState({ selectedRole: role });
  // }

  // handleChangeChampion(champion) {
  //   this.setState({ selectedChampion: champion });
  // }

  handleSubmit(event) {
    event.preventDefault();
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch('/api/auth/update', req)
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
                <input className='update-name' type='text' id='name' name='name' onChange={this.handleChangeName}/>
              </div>
              <div>
                <label htmlFor='bio'>Bio:</label>
                <textarea id='bio' name='bio' onChange= {this.handleChangeBio}></textarea>
              </div>
            </div>
          </div>

          {/* <div className='update-details-container update-glass-card d-flex'>
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
                value={ this.state.selectedRole }
                onChange={ this.handleChangeRole }
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
                value={ this.state.selectedRole }
                onChange={ this.handleChangeRole }
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
              value={ this.state.selectedChampion }
              onChange={ this.handleChangeChampion }
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
              value={ this.state.selectedChampion }
              onChange={ this.handleChangeChampion }
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
              value={ this.state.selectedChampion }
              onChange={ this.handleChangeChampion }
            />
          </div>
        </div> */}
        <div className='d-flex update-button-container'>
          <button className='text-center poppins-font update-button'>Update Profile</button>
        </div>
        </form>
      </div>
      </>
    );
  }
}

// function RankOptions(props) {
//   const { data, innerRef, innerProps } = props;
//   return (
//     <div value={data.rankId} ref={innerRef} {...innerProps}>
//       <img className='filter-icons' src={ data.rankUrl }></img>
//       <span> {data.rankId} </span>
//     </div>
//   );
// }

// function RoleOptions(props) {
//   const { data, innerRef, innerProps } = props;
//   return (
//     <div value={data.roleId} ref={innerRef} {...innerProps}>
//       <img className='filter-icons' src={data.roleUrl}></img>
//       <span> {data.roleId} </span>
//     </div>
//   );
// }

// function ChampionOptions(props) {
//   const { data, innerRef, innerProps } = props;
//   return (
//     <div value={data.championId} ref={innerRef} {...innerProps}>
//       <img className='filter-icons' src={data.championUrl}></img>
//       <span> {data.championId} </span>
//     </div>
//   );
// }
