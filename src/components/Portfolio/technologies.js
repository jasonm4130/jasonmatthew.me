import React, { Component } from 'react';
import Jquery from '../Icons/jQuery';

export default class Technologies extends Component {

    constructor(props) {
        super(props);

        this.state ={
            technologies: this.createTechnologiesArray(),
        }

    }

    render() {
        return (
            <div className={"row justify-content-center align-items-center"}>
                {this.props.technologies}
                <Jquery />
            </div>
        )
    }

    createTechnologiesArray() {

        let items = [];

        this.props.technologies.forEach((item, key) => {
            let icon;
            switch (item) {
                case 'jQuery':
                    icon = <Jquery />;
                    break;
                default:
                    break;
            }
            items.push(
                <div key={key} className="col-md-3 col-sm-2">
                    {icon}
                </div>
            );
            console.log(icon);
        });

        return items;
    }
}
