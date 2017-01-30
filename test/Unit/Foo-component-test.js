import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

// Componentry
import Foo from '../../src/components/Foo';

// Styles
import styles from '../../src/components/styles.scss';

// This is how you create a shallow with a store - just make it from the src
import store from '../../src/store';

// This is how you can create a mocked store:
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

// Setup
// Convenience method, especially useful when your component has alot of parameters
// Please take note of this '.dive()' function which is applicable when you wrap it with a store
const makeShallow = () => shallow(<Foo />, { context: { store } }).dive();
const makeMounted = () => mount(<Foo />, { context: { store } });

// Don't use es6 Arrow functions because it has some scoping confusion (with 'this')
describe("General component tests", function() {

  it("Contains an element with class 'foo' - find elements", function() {
    expect(makeShallow().is(`.${styles.foo}`)).to.equal(true);
  });

  it("Contains only a single element with class 'foo' - counting elements", function() {
    expect(makeShallow().find(`.${styles.foo}`).length).to.equal(1);
  });

  xit("Ignored test", function(){
    // This is ignored - Used to test CI When fail
    expect(false).to.equal(true);
  })
});
