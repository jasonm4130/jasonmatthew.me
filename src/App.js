import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route component={MainLayout} />
                    <div className="container">
                        <Route exact strict path="/" render={(props) => <Home />} />
                        <Route path="/portfolio" render={(props) => <Portfolio />} />
                        <Footer />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
