import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from 'containers/Search';
import './styles.css';

class Header extends Component {
  state = {
    productSelected: null
  };

  render() {
    return (
      <div className="Header">
        <div className="content">

          <div className="logoContainer">
            <a href="/"><div className="logo"></div></a>
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
