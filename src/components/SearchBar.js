import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <div className='search-bar'>
        <input type="text" 
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.term}
          className="searchBar"
          placeholder='Video search...'
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
