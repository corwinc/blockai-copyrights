import React from 'react';

import styles from '../styles/main.scss';

const Tile = function(props) {
	return (
		<div className={styles.tileContainer}>
			<div className={styles.userInfoContainer}>
				<a href={props.copyright.user.website} target="_blank">
					<img className={styles.avatar} src={props.copyright.user.avatar_url}></img>
					<div className={styles.name}>{props.copyright.user.name}</div>
				</a>
			</div>
			<a href={props.copyright.certificateUrls.png} target="_blank">
				{ props.renderMedia(props.copyright) }
			</a>
			<div className={styles.copyrightDescriptionContainer}>
				<div className={styles.copyrightTitle}>{props.copyright.name}</div>
				<div className={styles.copyrightDescription}>{props.copyright.description}</div>
			</div>
		</div>
	);
}

export default Tile;