import React, { Component } from 'react';
import Hero from '../Hero';

export default class Home extends Component {
	render() {
		return (
		<div className="row">
			<div className="col-12">
				<Hero />
			</div>
		</div>
		)
	}
}
