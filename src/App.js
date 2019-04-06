import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
        }
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route component={MainLayout} />
                    <div className="container">
                        <Route exact strict path="/" render={(props) => <Home menuOpen={this.state.menuOpen} />} />
                        <Footer />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
