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

class App extends React.Component {
	constructor(props) {
		super(props);

		var items = 36;

		this.getCopyrights = this.getCopyrights.bind(this);
		this.renderCopyrightTiles = this.renderCopyrightTiles.bind(this);
		this.renderMedia = this.renderMedia.bind(this);
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
	}

	componentDidMount() {
		this.getCopyrights();
	}


//// COPYRIGHT CLAIMS ////
	getCopyrights() {
		var items = 36;
		var url = 'https://api.blockai.com/v1/registrations/challenge?include=user&page=' + this.props.activePage + '&limit=' + items + '&search=' + this.props.searchInput;

		fetch(url)
			.then((res) => res.json())
		    .then((data) => {
		    	this.props.getCopyrightsSuccess(data.data, data.total);
		    })
		    .catch((err) => (
		    	console.log(err)
		    ));
	}

	renderCopyrightTiles() {
		var copyrightTiles = this.props.copyrights.map((cr) => {
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
	onPageSelect(page, cb) {
		new Promise((resolve) => resolve(this.props.onPageSelect(page)))
			.then(() => {
				cb();
			});
	}

//// SEARCH ////
	handleSearchSubmit(e) {
		e.preventDefault();
		new Promise((resolve) => resolve(this.props.handleSearchSubmit(e)))
			.then(() => this.getCopyrights());
	}


//// RENDER ////
	render() {
		var pages = Math.ceil(this.props.total / 36);

		return (
			<div className={styles.appContainer}>
				<Nav 
					handleSearchInput={this.props.handleSearchInput} 
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
							activePage={this.props.activePage}
							onSelect={(page) => this.onPageSelect(page, this.getCopyrights)}
							maxButtons={5}
				        />
			        </div>
					<TileGrid 
						renderCopyrightTiles={this.renderCopyrightTiles} 
						copyrights={this.props.copyrights}
					/>
					<div className={styles.paginationContainerBottom}>
						<Pagination 
							prev
							next
							first
							last
							items={pages}
							activePage={this.props.activePage}
							onSelect={this.onPageSelect}
							maxButtons={5}
				        />
			        </div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
  	copyrights: state.copyrights,
  	activePage: state.activePage,
  	total: state.total,
  	searchInput: state.searchInput
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCopyrightsSuccess: actions.getCopyrightsSuccess,
    onPageSelect: actions.onPageSelect,
    handleSearchInput: actions.handleSearchInput,
    handleSearchSubmit: actions.handleSearchSubmit

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);