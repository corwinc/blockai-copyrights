import React from 'react';
import {render, connect} from 'react-dom';

import Pagination from './Pagination.jsx';
import TileGrid from './TileGrid.jsx';
import * as actions from '../actions/index.js';

class CopyrightsContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			test: 'test'
		};

		this.method = this.method.bind(this);
	}

	method() {
		console.log('i am a method');
	}

	render() {
		return (
			<div>
				<div>Copyrights Container
					
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
  	test: this.state.test
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    action: actions.action
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CopyrightsContainer);