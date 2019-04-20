import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ArrowLeft from '../Icons/ArrowLeft';
import Technologies from './technologies';

export default class PortfolioPage extends Component {
    render() {
        return (
            <section className="portfolio-single">
                <div className="row">
                    <div className="col-auto mr-auto">
                        <Link to={`/portfolio`} className={'breadcrumbs'}>
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <ArrowLeft
                                        className={"breadcrumb-arrow"}
                                    />
                                </div>
                                <div className="col-auto">
                                    Back to portfolio
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8 text-center">
                        <h2>{this.props.item.title}</h2>
                        <p className="lead">{this.props.item.excerpt}</p>
                    </div>
                    <div className="col-md-6">
                        <img className={"portfolio-image"} src={this.props.item.imageSrc} alt={this.props.item.imageAlt} />
                    </div>
                    <main className="col-md-8 text-center content">
                        <h2>About</h2>
                        {this.props.item.content}
                        <h2>Technologies Used</h2>
                        <Technologies
                            technologies={this.props.item.technologies}
                        />
                        <h2>See More</h2>
                        <div className="row">
                            <div className="col">
                                {this.repoLink()}
                            </div>
                            <div className="col">
                                {this.liveLink()}
                            </div>
                        </div>
                    </main>
                </div>
            </section>
        )
    }

    repoLink() {
        if (this.props.item.repo) {
            return (
                <a className={"btn btn-large"} href={this.props.item.repo}>View Repo</a>
            );
        }
    }

    liveLink() {
        if (this.props.item.link) {
            return (
                <a className={"btn btn-large"} href={this.props.item.link}>View Live</a>
            );
        }
    }

}
