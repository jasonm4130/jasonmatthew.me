import React, { Component } from 'react'
import Email from '../Icons/Email';
import Twitter from '../Icons/Twitter';
import GitHub from '../Icons/GitHub';
import Medium from '../Icons/Medium';
import LinkedIn from '../Icons/LinkedIn';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <h2>Find me Here</h2>
                        <p className="lead" >Various places you can get in touch with me accross the internet.</p>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center icons-row">
                    <div className="col-md-2 text-center">
                        <a href="mailto:jasonm4130@gmail.com" >
                            <Email
                                className={"email"}
                            />
                        </a>
                    </div>
                    <div className="col-md-2 text-center">
                        <a href="https://twitter.com/jasonm4101" >
                            <Twitter
                                className={"twitter"}
                            />
                        </a>
                    </div>
                    <div className="col-md-2 text-center">
                        <a href="https://github.com/jasonm4130" >
                            <GitHub
                                className={"github"}
                            />
                        </a>
                    </div>
                    <div className="col-md-2 text-center">
                        <a href="https://medium.com/@Jason_Matthew" >
                            <Medium
                                className={"medium"}
                            />
                        </a>
                    </div>
                    <div className="col-md-2 text-center">
                        <a href="https://www.linkedin.com/in/jason-matthew-9227a9111/" >
                            <LinkedIn
                                className={"linkedin"}
                            />
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}
