import React, { Component } from 'react';
import { render } from 'react-dom';
import Foo from './Foo';

class App extends Component {
  render(){
    // Render JSX
    return (
      <div>
        <h1>Sample App on Heroku</h1>
        <Foo/>
      </div>
    );
  }
}

render(<App />, document.getElementById('container'));
