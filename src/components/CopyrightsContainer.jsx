import React from 'react';
import {render, connect} from 'react-dom';

import {Pagination} from 'react-bootstrap';
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
				},
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
				},
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
				},
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
				},
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
				},
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
				},
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
				},
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
				},
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
				},
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
				},
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
				},
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
				},
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
				},
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
				},
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
				},
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
				},
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
				},
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
				},
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
				},
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
				},
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
				},
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

			],
			activePage: 1
		};

		this.onSelect = this.onSelect.bind(this);
		this.getCopyrights = this.getCopyrights.bind(this);
		this.setCopyrights = this.setCopyrights.bind(this);
		this.renderCopyrightTiles = this.renderCopyrightTiles.bind(this);
	}

	componentDidMount() {
		this.getCopyrights();
	}

	onSelect(number) {
	  	this.setState({activePage: number});
	}

	getCopyrights() {
		console.log('inside getCopyrights');
		// get request
		// then: setCopyrights(response);
	}

	setCopyrights(copyrights) {
		this.setState({copyrights});
	}

	renderCopyrightTiles() {
		var tilesStart = (this.state.activePage - 1) * 36;
		var tilesEnd = this.state.activePage * 36;
		console.log('tilesStart:', tilesStart);
		var selectTiles = this.state.copyrights.slice(tilesStart, tilesEnd);
		console.log('selectTiles:', selectTiles);
		var copyrightTiles = selectTiles.map((cr, i) => {
			return (
				<Tile key={i} copyright={cr} />
			)
		});

		return copyrightTiles;
	}

	render() {
		var pages = Math.ceil(this.state.copyrights.length / 36);

		return (
			<div className={styles.copyrightsContainer}>
				<Pagination 
					prev
					next
					first
					last
					items={pages}
					activePage={this.state.activePage}
					onSelect={this.onSelect}
					maxButtons={5}
		        />
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