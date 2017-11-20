// @flow

import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

class Details extends Component {
	state = {
		apiData: { rating: '' }
	};
	componentDidMount() {
		axios.get(`http://localhost:3000/${this.props.show.imdbID}`).then((response: { data: { rating: string } }) => {
			this.setState({ apiData: response.data });
		});
	}
	props: { show: Show };
	render() {
		const { title, description, year, trailer, poster } = this.props.show;
		return (
			<div className="details">
				<Header />
				<section>
					<h1>{title}</h1>
					<h2>{year}</h2>
					<img src={`/public/img/posters/${poster}`} alt="" />
					<p>{description}</p>
				</section>
				<div>
					<iframe
						src={`http://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
						frameBorder="0"
						allowFullScreen
						title={`Trailer for ${title}`}
					/>
				</div>
			</div>
		);
	}
}

export default Details;
