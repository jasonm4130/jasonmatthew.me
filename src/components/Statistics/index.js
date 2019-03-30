import React, { Component } from 'react';
import Card from './Card';
const LEVEL_FACTOR = 0.025;

export default class Statistics extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isSorted: false,
		}

		fetch('https://codestats.net/api/users/jasonm4130')
			.then((response) => {
				return response.json();
			})
			.then((myJson) => {
				this.setState({ codeStats: myJson });
			});

	}

	componentDidUpdate() {
		if (!this.state.isSorted){
			this.orderLanguages(this.state.codeStats);
		}
	}

	orderLanguages(codeStats) {
		if (codeStats){
			let languages = [];
			Object.keys(codeStats.languages).forEach(language => {
				let languageData = {
					name: language,
					data: codeStats.languages[language],
				}
				languageData.data.level = Math.round(LEVEL_FACTOR * Math.sqrt(languageData.data.xps));
				languages.push( languageData );
			});
			languages.sort((a, b) => {
				if (a.data.xps > b.data.xps) {
					return -1;
				}
				if (b.data.xps > a.data.xps) {
					return 1;
				}
				return 0;
			});
			this.setState({
				sortedLanguages: languages,
				isSorted: true,
			});
		}
	}

	render() {

		let highestThree = null;
		let otherLanguages = null;

		if(this.state.isSorted && this.state.sortedLanguages) {
			highestThree = [];
			let highestThreeObject = this.state.sortedLanguages.slice(0, 3);
			highestThreeObject.forEach((language, key) => {
				highestThree.push(
					<div className="col-md-4" key={key}>
						<Card
							name={language.name}
							xps={language.data.xps}
							level={language.data.level}
						/>
					</div>
				);
			});
			otherLanguages = [];
			let otherLanguagesObject = this.state.sortedLanguages.slice(3, 12);
			otherLanguagesObject.forEach((language, key) => {
				otherLanguages.push(
					<div className="col-sm-4" key={key}>
						<div className="language-small">
							<span className="name">{language.name}</span>: {language.data.xps}
						</div>
					</div>
				);
			});
		}

		return (
			<section className="statistics">
				<div className="row justify-content-center">
					<div className="col-md-8 text-center">
						<h2>Experience</h2>
						<p className="lead">
							Each xp point represents a charachter typed. This has been recorded with <a href="https://codestats.net/users/jasonm4130" >CodeStats</a> since April 2018. 
						</p>
					</div>
				</div>
				<div className="row justify-content-center align-items-stretch highest-three">
					{highestThree}
				</div>
				<div className="row others">
					<div className="col-12">
						<div className="row justify-content-center">
							<div className="col-md-6 text-center">
								<p>Other languages xp level:</p>
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="row">
							{otherLanguages}
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-auto">
						<a href="https://codestats.net/users/jasonm4130" className="btn btn-large">More Info</a>
					</div>
				</div>
			</section>
		)
	}
}
