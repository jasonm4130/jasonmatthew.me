import React, { Component } from 'react';
import ProfilePic from '../../resources/images/Profile-Pic.jpeg';

export default class AboutMe extends Component {
    render() {
        return (
            <section className="about-me">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <img src={ProfilePic} alt={"Me"} className={"profile-pic img-round"} />
                        <h2>About Me</h2>
                        <p className="lead"></p>
                    </div>
                    <div className="col-md-8 content text-center">
                        <p>I’m Jason Matthew, a Full Stack developer from Brisbane Australia.</p>
                        <p>I have been designing and developing websites for the past 7 years. Starting as a freelancer working with start-ups and local businesses. I love coding and learning about the latest trends. With a particular focus on the current JavaScript ecosystem, and a traditional knowledge of PHP through WordPress and MVC frameworks like SilverStripe, Code Ignitor and Laravel.</p>
                        <p>I think that code quality and maintainability are of the utmost importance and this is a main focus of mine throughout all of my projects.</p>
                        <p>I am a avid learner and I put a high priority on this attending local meetups whenever possible, while also seeking learning through online courses and personal projects.</p>
                        <p>When outside of work I enjoy Learning including running two servers at home to experience more server architecture, networks and deployment methods.</p>
                        <p>I also strive to remain active as fitness is a passion of mine participating in weekly 5km parkrun events, while remaining active through gym and running throughout the week. </p>
                    </div>
                </div>
            </section>
        )
    }
}
