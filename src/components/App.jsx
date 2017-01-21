import React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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

		// DELETE W/ REDUX
		this.state = {
			copyrights: [],
			activePage: 1,
			total: null,
			searchInput: ''
		};

		var items = 36;

		// SELECTIVELY DELETE W/ REDUX
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
		// var url = 'https://api.blockai.com/v1/registrations/challenge?include=user&page=' + this.props.activePage + '&limit=' + items + '&search=' + this.props.searchInput;
		var url = 'https://api.blockai.com/v1/registrations/challenge?include=user&page=' + this.state.activePage + '&limit=' + items + '&search=' + this.state.searchInput;

		fetch(url)
			.then((res) => res.json())
		    .then((data) => {
		    	//this.props.getCopyrightsSuccess(data.data, data.total);
		      	this.setCopyrights(data);
		    })
		    .catch((err) => (
		    	console.log(err)
		    ));
	}

	// DELETE W/ REDUX
	setCopyrights(res) {
		this.setState({copyrights: res.data, total: res.total});
	}

	renderCopyrightTiles() {
		// var copyrightTiles = this.props.copyrights.map((cr, i) => {
		var copyrightTiles = this.state.copyrights.map((cr, i) => {
			return (
				<Tile key={cr.id} copyright={cr} renderMedia={this.renderMedia} />
			)
		});

		return copyrightTiles;
	}

	renderMedia(cr) {
		// Need to fix video rendering: currently showing blank
		if (cr.content_type_primary === 'video') {
			return (
				<div>
					<ReactPlayer url={cr.thumbURL} width={320} height={320} playing={false}/>
				</div>
			)
		} else if (cr.content_type_primary === 'image') {
			return (
				<div>
					<img className={styles.copyrightThumb} src={cr.thumbUrl}></img>
				</div>
			) 
		}
	}

//// PAGINATION ////
	// DELETE W/ REDUX
	onPageSelect(page) {
	  	this.setState({activePage: page}, this.getCopyrights);
	}

//// SEARCH ////
	// DELETE W/ REDUX
	handleSearchInput(e) {
		this.setState({searchInput: e.target.value});
	}

	handleSearchSubmit(e) {
		e.preventDefault();
		// IMPLEMENT ASYNCHRONOUS HANDLING w/ REDUX (e.g. thunx)
		// this.props.handleSearchSubmit, this.getCopyrights);
		this.setState({activePage: 1}, this.getCopyrights);
	}


//// RENDER ////
	render() {
		var pages = Math.ceil(this.state.total / 36);

		return (
			<div className={styles.appContainer}>
				<Nav 
					// handleSearchInput={this.props.handleSearchInput} 
					// handleSearchSubmit={this.props.handleSearchSubmit}
					handleSearchInput={this.handleSearchInput} 
					handleSearchSubmit={this.handleSearchSubmit} 
				/>
				<div className={styles.copyrightsContainer}>
					<div className={styles.paginationContainerTop}>
						<Pagination 
							prev
							next
							first
							last
							items={pages}
							// activePage={this.props.activePage}
							activePage={this.state.activePage}
							// onSelect={this.props.onPageSelect}
							onSelect={this.onPageSelect}
							maxButtons={5}
				        />
			        </div>
					<TileGrid 
						renderCopyrightTiles={this.renderCopyrightTiles} 
						// copyrights={this.props.copyrights}
						copyrights={this.state.copyrights}
					/>
					<div className={styles.paginationContainerBottom}>
						<Pagination 
							prev
							next
							first
							last
							items={pages}
							// activePage={this.props.activePage}
							activePage={this.state.activePage}
							// onSelect={this.props.onPageSelect}
							onSelect={this.onPageSelect}
							maxButtons={5}
				        />
			        </div>
				</div>
			</div>
		);
	}
}

// function mapStateToProps(state) {
//   return {
//   	copyrights: state.copyrights,
//   	activePage: state.activePage,
//   	total: state.total,
//   	searchInput: state.searchInput
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     getCopyrightsSuccess: actions.getCopyrightsSuccess,
//     onPageSelect: actions.onPageSelect,
//     handleSearchInput: actions.handleSearchInput,
//     handleSearchSubmit: actions.handleSearchSubmit

//   }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);