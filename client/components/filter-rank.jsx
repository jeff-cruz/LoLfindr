import React from 'react';
import Select from 'react-select';
export default class FilterRank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  render() {
    const ranks = [
      {
        value: null,
        label: (
          <>
            <span> Select Rank</span>
          </>
        )
      }, {
        value: 'Iron',
        label: (
        <>
        <img className='select-rank-icon' src='/images/ranked-emblems/iron.png'></img>
        <span> Iron</span>
        </>
        )
      }, {
        value: 'Bronze',
        label: (
          <>
            <img className='select-rank-icon' src='/images/ranked-emblems/bronze.png'></img>
            <span> Bronze</span>
          </>
        )
      }, {
        value: 'Silver',
        label: (
          <>
            <img className='select-rank-icon' src='/images/ranked-emblems/silver.png'></img>
            <span> Silver</span>
          </>
        )
      }, {
        value: 'Gold',
        label: (
          <>
            <img className='select-rank-icon' src='/images/ranked-emblems/gold.png'></img>
            <span> Gold</span>
          </>
        )
      }, {
        value: 'Platinum',
        label: (
          <>
            <img className='select-rank-icon' src='/images/ranked-emblems/platinum.png'></img>
            <span> Platinum</span>
          </>
        )
      }, {
        value: 'Diamond',
        label: (
          <>
            <img className='select-rank-icon' src='/images/ranked-emblems/diamond.png'></img>
            <span> Diamond</span>
          </>
        )
      }, {
        value: 'Master',
        label: (
          <>
            <img className='select-rank-icon' src='/images/ranked-emblems/master.png'></img>
            <span> Master</span>
          </>
        )
      }, {
        value: 'Grandmaster',
        label: (
          <>
            <img className='select-rank-icon' src='/images/ranked-emblems/grandmaster.png'></img>
            <span> Grandmaster</span>
          </>
        )
      }, {
        value: 'Challenger',
        label: (
          <>
            <img className='select-rank-icon' src='/images/ranked-emblems/challenger.png'></img>
            <span> Challenger</span>
          </>
        )
      }
    ];

    return (
      <Select
        className='filter-rank-select'
        placeholder="Select Rank"
        // defaultValue={selectedOption}
        // onChange={setSelectedOption}
        options={ranks}
      />
    );
  }
}
