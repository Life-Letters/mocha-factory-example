import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Foo from '../../src/Foo';
import styles from '../../src/styles.scss';

// Setup
// Convenience method, especially useful when your component has alot of parameters
const makeShallow = (r) => shallow(<Foo />);

// Test suite
// Don't use es6 Arrow functions because it has some scoping confusion (with 'this')
describe("Testing Component", function() {

  it("Contains an element with class 'foo'", function() {
    expect(makeShallow().is('.foo')).to.equal(true);
  });

  it("Contains only a single element with class 'foo'", function() {
    expect(makeShallow().find('.foo').length).to.equal(1);
  });

  xit("Ignored test", function(){
    // This is ignored - Used to test CI When fail
    expect(false).to.equal(true);
  })
});
