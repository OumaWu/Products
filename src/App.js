import React, { Component } from 'react';
import Products from './product/Products';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header><h1>Products list</h1></header>
        <section>
          <Products></Products>
        </section>
      </div>
    );
  }
}

export default App;
