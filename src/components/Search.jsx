import React from 'react';
import styles from '../styles/main.scss'

const Search = function(props) {
	return (
		<div>
			<form className="navbar-form navbar-right">
		        <div className="form-group">
		          <input type="text" className="form-control" placeholder="Search" onChange={props.handleSearchInput}></input>
		        </div>
		        <button type="submit" className="btn btn-default" onClick={props.handleSearchSubmit}>Submit</button>
	    	</form>
	    </div>
	);
}

export default Search;