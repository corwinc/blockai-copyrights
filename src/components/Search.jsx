import React from 'react';
import styles from '../styles/main.scss'

const Search = function(props) {
	return (
		<div>
			<form className="navbar-form navbar-right">
		        <div className="form-group">
		          <input type="text" className="form-control" placeholder="Search" onChange={props.handleInput}></input>
		        </div>
		        <button type="submit" className="btn btn-default" onSubmit={props.handleSubmit}>Submit</button>
	    	</form>
	    </div>
	);
}

export default Search;