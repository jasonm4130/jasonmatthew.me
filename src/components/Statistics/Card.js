import React, { Component } from 'react'

export default class Card extends Component {
	render() {
		return (
			<div className="card text-center">
				<h3 className="title">{this.props.name}</h3>
				<p>
					Level: {this.props.level}<br />
					XP: {this.props.xps}
				</p>
			</div>
		)
	}
}
