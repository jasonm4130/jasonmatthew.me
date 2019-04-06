import React, { Component } from 'react'
import Nav from '../Nav';

export default class MainLayout extends Component {
	render() {
		return (
			<div>
				<Nav
					location={this.props.location}
				/>	
			</div>
		)
	}
}
