import React from 'react';

import styles from '../styles/main.scss';

const Tile = function(props) {
	return (
		<div className={styles.tileContainer}><a href={props.copyright.certificateUrls.png} target="_blank">
			<img className={styles.avatar} src={props.copyright.user.avatar_url}></img>
			<div className={styles.name}>{props.copyright.user.name}</div>
			{ props.renderMedia(props.copyright) }
			<div>{props.copyright.name}</div>
			<div>{props.copyright.description}</div>
		</a></div>
	);
}

export default Tile;