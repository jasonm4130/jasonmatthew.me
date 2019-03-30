import React, { Component } from 'react'

export default class CurveDown extends Component {
	render() {
		return (
			<svg className={"curve-down " + this.props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
				<path d="M0 0c50 100 80 100 100 0z"/>
			</svg>			
		)
	}
}
