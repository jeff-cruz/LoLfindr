import React from 'react';
import Select from 'react-select';
import { Spinner } from 'react-bootstrap';

const customStyles = {
  valueContainer: (provided, state) => {
    return {
      ...provided, display: 'flex'
    };
  },
  control: (base, state, styles) => ({
    ...base,
    border: '1px solid white',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid white'
    },
    ...styles,
    cursor: 'pointer'
  })
};

export default class UpdateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: null,
      name: '',
      bio: '',
      selectedRank: '',
      selectedRoleOne: '',
      selectedRoleTwo: '',
      selectedChampionOne: '',
      selectedChampionTwo: '',
      selectedChampionThree: '',
      rankOptions: [],
      roleOptions: [],
      championOptions: [],
      isLoading: false
    };
    this.fileInputRef = React.createRef();
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
    Promise.all([
      fetch('/api/ranks-update')
        .then(res => res.json()),

      fetch('/api/roles-update')
        .then(res => res.json()),

      fetch('/api/champions-update')
        .then(res => res.json())

    ])
      .then(results => {
        const [rankOptions, roleOptions, championOptions] = results;

        const token = localStorage.getItem('react-context-jwt');
        const req = {
          method: 'GET',
          headers: {
            'X-Access-Token': token
          }
        };

        fetch('/api/user-details', req)
          .then(res => res.json())
          .then(form => {
            const { imageUrl, name, bio, rankId, roles, champions } = form;
            const rank = rankOptions.find(rank => rankId === rank.rankId);
            const [roleOne, roleTwo] = roleOptions.filter(role => roles.some(userRole => role.roleId === userRole.roleId));
            const [championOne, championTwo, championThree] = championOptions.filter(champion => champions.some(userChampion => champion.championId === userChampion.championId));
            this.setState({
              imageUrl,
              name,
              bio,
              selectedRank: rank,
              rankOptions,
              roleOptions,
              championOptions,
              selectedRoleOne: roleOne,
              selectedRoleTwo: roleTwo,
              selectedChampionOne: championOne,
              selectedChampionTwo: championTwo,
              selectedChampionThree: championThree
            });
            this.setState({ isLoading: false });
          });
      });

  }

  handleChangeName(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleChangeBio(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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
    this.setState({ isLoading: true });
    if (this.fileInputRef.current.files[0] === undefined || this.state.name === '' || this.state.name === null || this.state.selectedRank === undefined || this.state.selectedRoleOne === undefined || this.state.selectedRoleTwo === undefined ||
    this.state.selectedChampionOne === undefined || this.state.selectedChampionTwo === undefined || this.state.selectedChampionThree === undefined) {
      alert('All fields are required to submit.');
    } else {
      const token = localStorage.getItem('react-context-jwt');
      const formData = new FormData();
      formData.append('image', this.fileInputRef.current.files[0]);
      formData.append('name', this.state.name);
      formData.append('bio', this.state.bio);
      formData.append('rankId', this.state.selectedRank.rankId);
      formData.append('roles', this.state.selectedRoleOne.roleId);
      formData.append('roles', this.state.selectedRoleTwo.roleId);
      formData.append('champions', this.state.selectedChampionOne.championId);
      formData.append('champions', this.state.selectedChampionTwo.championId);
      formData.append('champions', this.state.selectedChampionThree.championId);

      const req = {
        method: 'PUT',
        headers: {
          'X-Access-Token': token
        },
        body: formData
      };
      fetch('/api/user', req)
        .then(res => res.json())
        .then(result => {
          window.location.hash = '';
          this.fileInputRef.current.value = null;
        });
    }
    this.setState({ isLoading: false });
  }

  render() {

    const imgClass = this.state.imageUrl === null
      ? '/images/placeholder.png'
      : this.state.imageUrl;

    const isLoading = this.state.isLoading ? '' : 'd-none';
    const hideOnLoad = this.state.isLoading ? 'd-none' : '';

    return (
      <>
        <div className='container update-user-container poppins-font d-flex'>
          <Spinner animation="border" className={`loader + ${isLoading}`} variant="light" />
          <div className={hideOnLoad}>
            <form onSubmit={this.handleSubmit} className='update-form' autoComplete="off">
            <div className='update-form-heading'>
              <h1 className='text-center update-title'>Edit Profile</h1>
            </div>
            <div className='update-details-container'>
              <div className='text-center'>
                  <img className='user-profile-picture' src={imgClass}></img>
              </div>
                <div className='upload-container'>
                    <input
                      className='upload-image'
                      type="file"
                      name="image"
                      ref={this.fileInputRef}
                      accept=".png, .jpg, .jpeg, .gif" />
                </div>
              <div className='user-profile-bio'>
                <div>
                  <label htmlFor='name' className='update-name'>Name:</label>
                  <input className='update-name' value={this.state.name} type='text' id='name' name='name' onChange={this.handleChangeName} />
                </div>
                <div>
                  <label htmlFor='bio'>Bio:</label>
                    <textarea value={this.state.bio} id='bio' name='bio' onChange= {this.handleChangeBio}></textarea>
                </div>
              </div>
            </div>

            <div className='update-details-container d-flex'>
              <h1 className='details-heading text-center'>Rank</h1>
              <p className='details-text'> Select One </p>
              <div className='details-container'>
                <Select
                  styles= { customStyles }
                  isSearchable = { false }
                  className='details-select react-select react-select-primary'
                  classNamePrefix='react-select'
                  placeholder='Select Rank'
                  id='rankId'
                  name='rankId'
                  options={ this.state.rankOptions }
                  getOptionValue= {rank => rank.rankId }
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
                  className='details-select react-select react-select-primary'
                  classNamePrefix='react-select'
                  placeholder='Select Role'
                  id='roles'
                  name='roles'
                  options={ this.state.roleOptions }
                  getOptionValue={role => role.roleId}
                  components={{ Option: RoleOptions, SingleValue: RoleOptions }}
                  value={ this.state.selectedRoleOne }
                  onChange={ this.handleChangeRoleOne }
                />
            </div>
            <div className='details-container'>
                <Select
                  styles={ customStyles }
                  isSearchable={ false }
                  className='details-select react-select react-select-primary'
                  classNamePrefix='react-select'
                  placeholder='Select Role'
                  id='roles'
                  name='roles'
                  options={ this.state.roleOptions }
                  getOptionValue={role => role.roleId}
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
                className='details-select react-select react-select-primary'
                classNamePrefix='react-select'
                placeholder='Select Champion'
                id='champions'
                name='champions'
                options={ this.state.championOptions }
                getOptionValue={champion => champion.championId}
                components={{ Option: ChampionOptions, SingleValue: ChampionOptions }}
                value={ this.state.selectedChampionOne }
                onChange={ this.handleChangeChampionOne }
              />
            </div>
            <div className='details-container'>
              <Select
                styles={ customStyles }
                isSearchable={ false }
                className='details-select react-select react-select-primary'
                classNamePrefix='react-select'
                placeholder='Select Champion'
                id='champions'
                name='champions'
                options={ this.state.championOptions }
                getOptionValue={champion => champion.championId}
                components={{ Option: ChampionOptions, SingleValue: ChampionOptions }}
                value={ this.state.selectedChampionTwo }
                onChange={ this.handleChangeChampionTwo }
              />
            </div>
            <div className='details-container'>
              <Select
                styles={ customStyles }
                isSearchable={ false }
                className='details-select react-select react-select-primary'
                classNamePrefix='react-select'
                placeholder='Select Champion'
                id='champions'
                name='champions'
                options={this.state.championOptions }
                getOptionValue={champion => champion.championId}
                components={{ Option: ChampionOptions, SingleValue: ChampionOptions }}
                value={ this.state.selectedChampionThree }
                onChange={this.handleChangeChampionThree}
              />
            </div>
          </div>
          <div className='update-button-container'>
            <button className='text-center poppins-font update-button'>Update Profile</button>
          </div>
          </form>
        </div>
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
