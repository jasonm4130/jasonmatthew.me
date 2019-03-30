import React, { Component } from 'react';
import Speed from '../Icons/Speed';
import Analysis from '../Icons/Analysis';
import YouTube from '../Icons/YouTube';

export default class Facts extends Component {
	render() {
		return (
			<section className="facts">
				<div className="row justify-content-center">
					<div className="col-md-4 text-center">
						<h2>Facts</h2>
						<div className="lead">What currently amazes in<br />the world of the web</div>
					</div>
				</div>
				<div className="row justify-content-center align-items-stretch">
					<div className="col-md-4">
						<div className="fact">
							<Speed />
							<h3>Load speed is costing you $</h3>
							<p>If Amazons initial page load took 1s longer it would cost them an estimated $1.6 Billion. Yes with a B.</p>
							<p>Google has tested that if their search results are 4/10ths of a second slower they would lose 8 million searches per day.</p>
							<div className="btn-container">
								<a href="https://www.fastcompany.com/1825005/how-one-second-could-cost-amazon-16-billion-sales" className="btn btn-fact">Read More</a>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="fact">
							<Analysis />
							<h3>Social Media knows more than you think</h3>
							<p>Facebook keeps more than 800 pages of data per user. That's a lot of data!</p>
							<p>I'm not sure I could even write 800 pages of facts about myself.</p>
							<div className="btn-container">
								<a href="https://www.geek.com/geek-pick/facebook-stores-up-to-800-pages-of-personal-data-per-user-account-1424807/" className="btn btn-fact">Read More</a>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="fact">
							<YouTube />
							<h3>500hrs of video are upload to YouTube per minute</h3>
							<p>In 2007 approximately 6 hours of video were uploaded to YouTube per minuite.</p>
							<p>In 2018 more than 500 hours of video is being uploaded to YouTube every minuite.</p>
							<div className="btn-container">
								<a href="https://tubularinsights.com/hours-minute-uploaded-youtube/" className="btn btn-fact">Read More</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
