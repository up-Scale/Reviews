import React from 'react';

const MAGNIFYING_GLASS_URL = 'https://nl.daysy.me/static/img/asset/icon.loupe.svg'


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',

    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);

  }

  onChange (e) {
    this.setState({
      term: e.target.value
    },
      this.search()
    )
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    const style ={
        width: '250px',
        height: '25px',
        paddingLeft: '50px',
        borderRadius: '3px',
        fontStyle: 'italic',
        float: 'left',
        fontSize: '14px',
    }
    const button = {
        height: '20px',
        width: '20px',
        paddingTop: '5px',
        marginLeft: '-300px'
    }

    const defaultValue = 'Search this review discussion'

    return (
    <div>
        <div className='container' style={{marginLeft: '20px'}}>
            <input style={style} value={this.state.term} placeholder={defaultValue} onChange={this.onChange}/>       
            <img type='submit' src={MAGNIFYING_GLASS_URL} style={button} onClick={this.search}></img>
        </div>
    </div>
    ) 
  }
}

export default Search;