import React, { Component } from 'react'
import PortfolioItem from '../PortfolioItem';

export default class LatestWork extends Component {
    render() {
        return (
            <section className="latest-work">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <h2>Latest Projects</h2>
                        <p className="lead">Some of the latest projects I have been working on with permission to show you, or in my spare time.</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <PortfolioItem
                            title={"Lanx Media"}
                            content={"A modern marking agency single page template, created in 2018 as a fun project to play with Jekyll, SASS and PUG"}
                            link={"https://silly-tesla-b5ae6e.netlify.com/"}
                        />
                    </div>
                </div>
            </section>
        )
    }
}
