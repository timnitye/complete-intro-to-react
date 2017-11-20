// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
	width: 30%;
	border: 2px solid #333;
	border-radius: 4px;
	margin: 1rem;
	padding-right: 10px;
	overflow: hidden;
	color: #000;
	text-decoration: none;
`;
const Image = styled.img`
	width: 46%;
	float: left;
	margin-right: 10px;

`;

class ShowCard extends Component {
	ShouldComponentUpdate() {
		this.props = this.props;
		return false;
	}
	props: Show;
	render() {
		return (
			<Wrapper to={`/details/${this.props.imdbID}`}>
				<Image alt={`${this.props.title} Show Poster`} src={`/public/img/posters/${this.props.poster}`} />
				<div>
					<h3>{this.props.title}</h3>
					<h4>({this.props.year})</h4>
					<p>{this.props.description}</p>
				</div>
			</Wrapper>
		);
	}
}

export default ShowCard;
