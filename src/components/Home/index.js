import React, { Component } from 'react';
import Hero from '../Hero';
import Facts from '../Facts';
import Statistics from '../Statistics';

export default class Home extends Component {
	render() {
		return (
		<div className="row">
			<div className="col-12">
				<Hero />
				<Facts />
				<Statistics />
			</div>
		</div>
		)
	}
}
