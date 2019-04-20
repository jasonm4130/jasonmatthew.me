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
                        <p className="lead">Some of the latest projects I have been working on with permission to show you, or in my spare time.</p>
                    </div>
                    <div className="col-md-8 content text-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vero quibusdam pariatur omnis, officia eos necessitatibus dignissimos minima esse at in eaque, molestias nostrum cupiditate voluptates aperiam recusandae. Ipsa, ut.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vero quibusdam pariatur omnis, officia eos necessitatibus dignissimos minima esse at in eaque, molestias nostrum cupiditate voluptates aperiam recusandae. Ipsa, ut.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vero quibusdam pariatur omnis, officia eos necessitatibus dignissimos minima esse at in eaque, molestias nostrum cupiditate voluptates aperiam recusandae. Ipsa, ut.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vero quibusdam pariatur omnis, officia eos necessitatibus dignissimos minima esse at in eaque, molestias nostrum cupiditate voluptates aperiam recusandae. Ipsa, ut.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vero quibusdam pariatur omnis, officia eos necessitatibus dignissimos minima esse at in eaque, molestias nostrum cupiditate voluptates aperiam recusandae. Ipsa, ut.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vero quibusdam pariatur omnis, officia eos necessitatibus dignissimos minima esse at in eaque, molestias nostrum cupiditate voluptates aperiam recusandae. Ipsa, ut.</p>
                    </div>
                </div>
            </section>
        )
    }
}
