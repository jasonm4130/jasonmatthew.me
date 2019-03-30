import React, { Component } from 'react';
import Logo from '../Icons/Logo';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
	render() {
		return (
			<header>
				<Logo 
					className="logo"
				/>
				<nav className="navbar navbar-expand-lg">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="container">
						<div className="collapse navbar-collapse">
							<div className="navbar-nav">
								<Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
								<Link className="nav-item nav-link" to="/portfolio">Portfolio</Link>
								<Link className="nav-item nav-link" to="/about-me">About Me</Link>
								<Link className="nav-item nav-link disabled" to="/contact">Contact</Link>
							</div>
						</div>
					</div>
				</nav>
			</header>
		)
	}
}
