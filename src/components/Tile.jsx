import React from 'react';

import styles from '../styles/main.scss';

const Tile = function(props) {
	return (
		<div className={styles.tileContainer}>
			<img className={styles.avatar} src={props.copyright.avatar}></img>
			<div className={styles.name}>{props.copyright.user}</div>
			<img className={styles.copyrightImg} src={props.copyright.img}></img>
			<div>{props.copyright.title}</div>
			<div>{props.copyright.desc}</div>
		</div>
	);
}

export default Tile;