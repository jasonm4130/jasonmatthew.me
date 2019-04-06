import React, { Component } from 'react'

export default class article extends Component {
    render() {
        return (
            <div className="medium-article text-center">
                <div className="image-container">
                    <img src={"https://miro.medium.com/max/640/" + this.props.article.virtuals.previewImage.imageId} alt="Article Hero"/>
                </div>
                <h2>{this.props.article.title}</h2>
                <p>{this.props.article.content.subtitle}</p>
                <div className="row justify-content-center button-container">
					<div className="col-auto">
						<a href={"https://medium.com/@jason_matthew/" + this.props.article.uniqueSlug} target="_blank" className="btn btn-large">Read More</a>
					</div>
				</div>
            </div>
        )
    }
}
