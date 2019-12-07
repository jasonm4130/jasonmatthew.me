import React, { Component } from 'react';
import ChevronRight from '../Icons/ChevronRight';

export default class Hero extends Component {
	render() {
		return (
			<section className="hero">
				<div className="row justify-content-center align-items-center">
					<div className="col-md-7">
						<h1>
							<span>if</span> (time <span>&gt;</span> 9am <span>&amp;&amp;</span> time <span>&lt;</span> 5pm) &#123; <br />
							&nbsp;&nbsp;&nbsp;&nbsp;me <span>=</span> fullStackDeveloper; <br />
							&#125; <span>else</span> &#123; <br />
							&nbsp;&nbsp;&nbsp;&nbsp;me <span>=</span> techEnthauiast; <br />
							&#125; <br />
						</h1>
					</div>
					<div className="col-md-5">
						<p>By profession I am a full stack web developer, working on exciting projects in Brisbane Australia.</p>
						<p>That's only about 8 hours of my day though. The rest of my time is spent learning or as my wife likes to call it "fiddling" with all things technology.</p>
						<p>From running a enterprise servers at home learning about networking and security, to building a space invader clone for a Teensey Board in C</p>
						<button className="btn btn-cta">Find Out More <ChevronRight /></button>
					</div>
				</div>
			</section>
		)
	}
}
