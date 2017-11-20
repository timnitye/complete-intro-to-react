// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import { setSearchTerm, clearSearchTerm } from './actionCreators';

class Landing extends Component {
	props: {
		searchTerm: string,
		handleSearchTermChange: Function,
		handleSearchTermClearing: Function,
		history: RouterHistory
	};
	goToSearch = (event: SyntheticEvent) => {
		event.preventDefault();
		this.props.history.push('/search');
	};

	render() {
		return (
			<div className="landing">
				<h1>{this.props.searchTerm}</h1>
				<form onSubmit={this.goToSearch}>
					<input
						onChange={this.props.handleSearchTermChange}
						value={this.props.searchTerm}
						type="text"
						placeholder="search"
					/>
				</form>
				<Link to="/search" onClick={this.props.handleSearchTermClearing}>or Browse All</Link>
			</div>
		);
	}
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
	handleSearchTermChange(event) {
		dispatch(setSearchTerm(event.target.value));
	},
	handleSearchTermClearing() {
		dispatch(clearSearchTerm());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
