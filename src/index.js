import React, { Component } from 'react';
import { render } from 'react-dom';
import Foo from './components/Foo';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render(){
    // Render JSX
    return (
      <Provider store={store}>
        <Foo/>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('container'));
