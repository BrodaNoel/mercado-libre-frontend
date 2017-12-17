import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Search extends Component {
  state = {
    value: ''
  };

  handleOnChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleOnKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.onSearch(event.target.value);
    }
  }

  render() {
    return (
      <div className="Search">
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          value={this.state.value}
          onKeyPress={this.handleOnKeyPress}
          onChange={this.handleOnChange} />

        <i
          className="fa fa-search"
          onClick={() => this.props.onSearch(this.state.value)}></i>
      </div>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Search;
