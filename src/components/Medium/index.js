import React, { Component } from 'react';
import Article from './article';

export default class Medium extends Component {

	constructor(props) {
		super(props);
		this.state = {
			articlesData: null,
			articlesRecieved: false
		}

		fetch('/.netlify/functions/api')
			.then(response => response.json())
        	.then(response => {
				this.setState({
					articlesData: response,
					articlesRecieved: true
				});
			});
	}



	render() {

		let articlesArray = [];

		if (this.state.articlesRecieved) {
			
			const articlesObject = this.state.articlesData.payload.references.Post
			const articles = Object.keys(articlesObject).map(function (key) { return articlesObject[key]; });

			articles.slice(0, 3).forEach((article, key) => {
				articlesArray.push(
					<div key={key} className="col-md-4">
						<Article
							article={article}
						/>
					</div>
				);
			});
		}

		return (
			<section className="Medium">
				<div className="row justify-content-center">
					<div className="col-md-6 text-center">
						<h2>Recent Articles</h2>
						<p className="lead">What I've recently been learning about, or found interesting in my week.</p>
					</div>
				</div>
				<div className="row align-items-stretch articles-container">
					{articlesArray}
				</div>
			</section>
		)
	}
}
