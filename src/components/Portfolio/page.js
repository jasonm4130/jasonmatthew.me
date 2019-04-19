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
                    <div className="col-12 text-center">
                        <h2>{this.props.item.title}</h2>
                    </div>
                    <div className="col-md-6">
                        <img src={this.props.item.imageSrc} alt={this.props.item.imageAlt} />
                    </div>
                    <main className="col-md-8 text-center content">
                        <h2>About</h2>
                        {this.props.item.content}
                        <h2>Technologies Used</h2>
                        <Technologies
                            technologies={this.props.item.technologies}
                        />
                    </main>
                </div>
            </section>
        )
    }
}
