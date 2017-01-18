import React from 'react';
import {render, connect} from 'react-dom';

import Pagination from './Pagination.jsx';
import TileGrid from './TileGrid.jsx';
import Tile from './Tile.jsx';
import * as actions from '../actions/index.js';
import styles from '../styles/main.scss';

export default class CopyrightsContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			copyrights: [
				{
					user: 'Corwin',
					avatar: 'https://files.blockai.com/v1/files/KdGNObx2n12z+avatar.png',
					img: 'https://files.blockai.com/v1/transform/thumb/bKmwXQpQ41G7',
					title: 'My copyright',
					desc: 'Published on instagram.'
				},
				{
					user: 'Jan',
					avatar: 'https://files.blockai.com/v1/files/KdGNObx2n12z+avatar.png',
					img: 'https://files.blockai.com/v1/transform/thumb/bKmwXQpQ41G7',
					title: 'Jan copyright',
					desc: 'Published on instagram also!'
				}
			]
		};

		this.getCopyrights = this.getCopyrights.bind(this);
		this.setCopyrights = this.setCopyrights.bind(this);
		this.renderCopyrightTiles = this.renderCopyrightTiles.bind(this);
	}

	getCopyrights() {
		// get request
		// setCopyrights(response);
	}

	setCopyrights(copyrights) {
		this.setState({copyrights});
	}

	renderCopyrightTiles() {
		var copyrightTiles = this.state.copyrights.map((cr, i) => {
			return (
				<Tile key={i} copyright={cr} />
			)
		});

		return copyrightTiles;
	}

	render() {
		return (
			<div className={styles.copyrightsContainer}>
				<Pagination className={styles.paginationContainerTop}/>
				<TileGrid renderCopyrightTiles={this.renderCopyrightTiles} copyrights={this.state.copyrights}/>
			</div>
		);
	}
}

// function mapStateToProps(state) {
//   return {
//   	test: this.state.test
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     action: actions.action
//   }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CopyrightsContainer);