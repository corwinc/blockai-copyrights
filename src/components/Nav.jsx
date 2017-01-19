import React from 'react';
import styles from '../styles/main.scss'

import Search from './Search.jsx';

const Nav = function(props) {
	return (
		<div className="navbar navbar-default navbar-fixed-top">
			<div className={styles.navTitle}>Blockai Copyrights</div>
			<Search handleSearchInput={props.handleSearchInput} handleSearchSubmit={props.handleSearchSubmit}/>
		</div>
	);
}

export default Nav;