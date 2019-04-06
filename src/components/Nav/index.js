import React, { Component } from 'react';
import Logo from '../Icons/Logo';
import { Link } from 'react-router-dom';

export default class Nav extends Component {

	constructor(props) {
		super(props)
		this.state = {
			navbarOpen: false,
		}
	}

	navbarHandler() {
		this.setState(prevState => ({
			navbarOpen: !prevState.navbarOpen,
		}));
	}

	render() {
		return (
			<header>
				<Logo 
					className="logo"
				/>
				<nav className="navbar navbar-expand-md">
					<button className="navbar-toggler" type="button" aria-expanded="false" aria-label="Toggle navigation" onClick={() => this.navbarHandler()}>
						<div className="trigger">
							<svg className={"bars" + (this.state.navbarOpen ? ' active' : '')} viewBox="0 0 100 100">
							<path className="line top" d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"></path>
							<path className="line middle" d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"></path>
							<path className="line bottom" d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"></path>
							</svg>
						</div>
					</button>
					<div className="container">
						<div className={"collapse navbar-collapse" + (this.state.navbarOpen ? ' show' : '')}>
							<div className="navbar-nav">
								<Link className={"nav-item nav-link" + (this.props.location.pathname === '/' ? ' active' : '')} to="/">Home {(this.props.location.pathname === '/' ? '(current)' : '')}</Link>
								<Link className={"nav-item nav-link" + (this.props.location.pathname === '/portfolio' ? ' active' : '')} to="/portfolio">Portfolio {(this.props.location.pathname === '/portfolio' ? '(current)' : '')}</Link>
								<Link className={"nav-item nav-link" + (this.props.location.pathname === '/about-me' ? ' active' : '')} to="/about-me">About Me {(this.props.location.pathname === '/about-me' ? '(current)' : '')}</Link>
								<Link className={"nav-item nav-link" + (this.props.location.pathname === '/contact' ? ' active' : '')} to="/contact">Contact {(this.props.location.pathname === '/contact' ? '(current)' : '')}</Link>
							</div>
						</div>
					</div>
				</nav>
			</header>
		)
	}
}
