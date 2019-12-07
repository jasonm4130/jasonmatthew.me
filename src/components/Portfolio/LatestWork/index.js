import React, { Component } from 'react';
import PortfolioItemCard from '../PortfolioItem/card';

export default class LatestWork extends Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolioItems: this.constructPortfolioItems(),
        }
    }

    render() {
        return (
            <section className="latest-work">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <h2>Latest Projects</h2>
                        <p className="lead">Some of the latest projects I have been working on.</p>
                    </div>
                </div>
                <div className="row justify-content-center align-items-strech portfolio-items">
                    {this.state.portfolioItems}
                </div>
            </section>
        )
    }

    constructPortfolioItems() {
        let items = [];
        
        this.props.portfolioItems.forEach((item, key) => {
            items.push(
                <div className="col-md-4" key={key}>
                    <PortfolioItemCard
                        item={item}
                    />
                </div>
            )
        });

        return items;
    }
}