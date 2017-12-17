import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from 'containers/Search';
import './styles.css';

class Header extends Component {
  state = {
    search: '',
    productSelected: null
  };

  render() {
    return (
      <div className="Header">
        <div className="content">

          <div className="logoContainer">
            <div className="logo"></div>
          </div>
          <Search onSearch={this.props.onSearch}></Search>

        </div>
      </div>
    );
  }
}

Header.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Header;
