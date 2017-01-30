import React, { Component } from 'react';
import { render } from 'react-dom';
import Foo from './components/Foo';

class App extends Component {
  render(){
    // Render JSX
    return (
      <div>
        <Foo/>
      </div>
    );
  }
}

render(<App />, document.getElementById('container'));
