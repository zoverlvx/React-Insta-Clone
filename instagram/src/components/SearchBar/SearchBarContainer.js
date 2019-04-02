import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <img alt="instagram logo" src={IGLogo} className="logo-image" />
      </div>
      <div>
        <input 
	    onKeyDown={props.searchPosts}
	    type="text" 
	    placeholder="Search" 
	/>
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i className="fa fa-compass" />
        </div>
        <div className="social">
          <i className="fa fa-heart" />
        </div>
        <div className="social">
          <i className="fa fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
