import React, { Component } from 'react';

export default class Technologies extends Component {
    render() {
        return (
            <div className={"row justify-content-center align-items-center"}>
                {this.constructTechnologySingle()}
            </div>
        )
    }

    constructTechnologySingle() {

        let items = [];

        this.props.technologies.forEach((item, key) => {
            items.push(
                <div className="col" key={key}>
                    {item}
                </div>
            );
        });

        return items;
    }
}
