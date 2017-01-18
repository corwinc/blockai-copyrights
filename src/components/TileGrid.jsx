import React from 'react';
import Tile from './Tile.jsx';
import styles from '../styles/main.scss';

const TileGrid = function(props) {
	return (
		<div className={styles.tileGridContainer}>
			<div className={styles.tileGridWrapper}>
				{ props.renderCopyrightTiles() }
			</div>
		</div>
	);
}

export default TileGrid;