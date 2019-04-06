import React, { Component } from 'react'

export default class PortfolioItem extends Component {
    render() {

        let buttons;

        if (this.props.link && this.props.repo) {
            buttons =
                <div className="row justify-content-center">
                    <div className="col-6">
                        <a href={this.props.link} className="btn btn-portfolio">View Live</a>
                    </div>
                    <div className="col-6">
                        <a href={this.props.repo} className="btn btn-portfolio">View Repo</a>
                    </div>
                </div>;
        } else if (!this.props.repo) {
            buttons = 
                <div className="row justify-content-center">
                    <div className="col-6">
                        <a href={this.props.link} className="btn btn-portfolio">View Live</a>
                    </div>
                </div>;
        } else if (!this.props.link) {
            buttons = 
                <div className="row justify-content-center">
                    <div className="col-6">
                        <a href={this.props.repo} className="btn btn-portfolio">View Repo</a>
                    </div>
                </div>;
        }

        return (
            <div className={"portfolio-item text-center " + this.props.className}>
                <div className="image-container">
                    <img src={this.props.imageSrc} alt={this.props.imageAlt}/>
                </div>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
                {buttons}
            </div>
        )
    }
}
