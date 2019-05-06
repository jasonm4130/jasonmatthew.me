import React, { Component } from 'react'

export default class ContactForm extends Component {

    

    render() {
        return (
            <section className="contact">
                <div className="row justify-content-center">
					<div className="col-md-6 text-center">
						<h2>Say Hi!</h2>
						<p className="lead">I'm always excited to get in touch with people!</p>
					</div>
				</div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form action="" className="row contact-form">
                            <div className="col-md-6 form-field">
                                <label for="name">Name</label>
                                <input type="text" name="name" required />
                            </div>
                            <div className="col-md-6 form-field">
                                <label for="email">E-mail</label>
                                <input type="email" name="email" required />
                            </div>
                            <div className="col-12 form-field">
                                <label for="message">Message</label>
                                <textarea name="message" rows="5" cols="50" required />
                            </div>
                            <div className="col-12 text-center form-field">
                                <input className="btn btn-large" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
