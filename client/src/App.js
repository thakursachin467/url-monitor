import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import AllUrls from './containers/AllUrls';
import Url from './containers/Url';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/all" component={AllUrls} />
          <Route exact path="/url/:id" component={Url} />
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
