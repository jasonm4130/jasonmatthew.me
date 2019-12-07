import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route component={MainLayout} />
                    <div className="container">
                        <Route exact strict path="/" render={(props) => <Home />} />
                        <Route path="/portfolio" render={(props) => <Portfolio />} />
                        <Route path="/about-me" render={(props) => <AboutMe />} />
                        <Route path="/contact" render={(props) => <ContactForm />} />
                        <Footer />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
