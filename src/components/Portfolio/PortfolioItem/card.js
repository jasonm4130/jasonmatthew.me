import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PortfolioItemCard extends Component {
    render() {

        const slug = this.props.item.title
                        .toLowerCase()
                        .replace(/ /g,'-')
                        .replace(/[^\w-]+/g,'');

        return (
            <div className={"portfolio-item text-center " + this.props.item.className}>
                <div className="image-container">
                    <img src={this.props.item.imageSrc} alt={this.props.item.imageAlt}/>
                </div>
                <h3>{this.props.item.title}</h3>
                <p>{this.props.item.excerpt}</p>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <Link to={`/portfolio/${slug}`} className="btn btn-portfolio">More Info</Link>
                    </div>
                </div>
            </div>
        )
    }
}
