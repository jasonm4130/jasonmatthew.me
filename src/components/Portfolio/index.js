import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LatestWork from './LatestWork';
import data from './LatestWork/data';
import PortfolioPage from './page';

export default class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsSingle: this.constructPortfolioPages(),
        }
    }

    render() {
        return (
            <div>
                <Route exact strict path="/portfolio" render={
                    (props) => 
                    <LatestWork
                        portfolioItems={data}
                    />
                } />
                {this.state.itemsSingle}
            </div>
        )
    }

    constructPortfolioPages() {
        let items = [];

        data.forEach((item, key) => {
            const slug = this.slugGenerator(item.title);
            items.push(<Route key={key} path={`/portfolio/${slug}`} render={
                (props) => 
                <PortfolioPage
                    key={key}
                    item={item}
                />
            } />);
        });

        return items;
    }

    slugGenerator(title) {
        return title
            .toLowerCase()
            .replace(/ /g,'-')
            .replace(/[^\w-]+/g,'');
    }
}
