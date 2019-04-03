import React, { Component } from 'react'

export default class Medium extends Component {

	constructor(props) {
		super(props);

		fetch('/.netlify/functions/api')
        	.then(response => response.json())
			.then(json => console.log(json));

	}

	render() {
		return (
			<section className="Medium">
				<div className="row justify-content-center">
					<div className="col-md-6 text-center">
						<h2>Recent Articles</h2>
						<p className="lead">What I've recently been learning about, or found interesting in my week.</p>
					</div>
				</div>
				<div className="row align-items-stretch">

				</div>
			</section>
		)
	}
}
