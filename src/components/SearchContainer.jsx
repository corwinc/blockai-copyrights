import React from 'react';
import styles from '../styles/main.scss';

import Search from './Search.jsx';

export default class SearchContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		};

		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
  
	handleInput(e) {
		this.setState({value: e.target.value});
	}

	handleSubmit(e) {
		console.log('handleSubmit:', this.state.value);
		e.preventDefault();
	}
  
	render() {
	  	return <Search handleInput={this.handleInput} handleSubmit={this.handleSubmit}/>
	}
}

