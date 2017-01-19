import React from 'react';
import {render, connect} from 'react-dom';
import ReactPlayer from 'react-player';
import Nav from './Nav.jsx';
import {Pagination} from 'react-bootstrap';
import TileGrid from './TileGrid.jsx';
import Tile from './Tile.jsx';

import styles from '../styles/main.scss';
import * as actions from '../actions/index.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			copyrights: [],
			activePage: 1,
			total: null,
			searchInput: ''
		};

		var items = 36;

		this.getCopyrights = this.getCopyrights.bind(this);
		this.setCopyrights = this.setCopyrights.bind(this);
		this.renderCopyrightTiles = this.renderCopyrightTiles.bind(this);
		this.renderMedia = this.renderMedia.bind(this);
		this.onPageSelect = this.onPageSelect.bind(this);
		this.handleSearchInput = this.handleSearchInput.bind(this);
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
	}

	componentDidMount() {
		this.getCopyrights();
	}


//// COPYRIGHT CLAIMS ////
	getCopyrights() {
		var items = 36;
		var url = 'https://api.blockai.com/v1/registrations/challenge?include=user&page=' + this.state.activePage + '&limit=' + items + '&search=' + this.state.searchInput;

		fetch(url)
			.then((res) => res.json())
		    .then((data) => {
		      	this.setCopyrights(data);
		    })
		    .catch((err) => (
		    	console.log(err)
		    ));
	}

	setCopyrights(res) {
		this.setState({copyrights: res.data, total: res.total});
	}

	renderCopyrightTiles() {
		var copyrightTiles = this.state.copyrights.map((cr, i) => {
			return (
				<Tile key={cr.id} copyright={cr} renderMedia={this.renderMedia} />
			)
		});

		return copyrightTiles;
	}

	renderMedia(cr) {
		if (cr.content_type_primary === 'video') {
			return <ReactPlayer className={styles.copyrightImg} url={cr.thumbURL} />
		} else if (cr.content_type_primary === 'image') {
			return <img className={styles.copyrightImg} src={cr.thumbUrl}></img>
		}
	}

//// PAGINATION ////
	onPageSelect(page) {
	  	this.setState({activePage: page}, this.getCopyrights);
	}

//// SEARCH ////
	handleSearchInput(e) {
		this.setState({searchInput: e.target.value});
	}

	handleSearchSubmit(e) {
		e.preventDefault();
		this.setState({activePage: 1}, this.getCopyrights);
	}


//// RENDER ////
	render() {
		var pages = Math.ceil(this.state.total / 36);

		return (
			<div>
				<Nav 
					handleSearchInput={this.handleSearchInput} 
					handleSearchSubmit={this.handleSearchSubmit} 
				/>
				<div className={styles.copyrightsContainer}>
					<Pagination 
						prev
						next
						first
						last
						items={pages}
						activePage={this.state.activePage}
						onSelect={this.onPageSelect}
						maxButtons={5}
			        />
					<TileGrid 
						renderCopyrightTiles={this.renderCopyrightTiles} 
						copyrights={this.state.copyrights}
					/>
				</div>
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