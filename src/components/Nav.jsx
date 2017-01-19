import React from 'react';
import styles from '../styles/main.scss'

import SearchContainer from './SearchContainer.jsx';

const Nav = function() {
	return (
		<div className="navbar navbar-default navbar-fixed-top">
			<div className={styles.navTitle}>Blockai Copyrights</div>
			<SearchContainer />
		</div>
	);
}

export default Nav;