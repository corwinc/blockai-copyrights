import React from 'react';
import Tile from './Tile.jsx';
import styles from '../styles/main.scss';

const TileGrid = function(props) {
	return (
		<div className={styles.tileGridContainer}>
			<div id='tiles-grid-container'>Tile Grid</div>
			{ props.renderCopyrightTiles() }
		</div>
	);
}

export default TileGrid;