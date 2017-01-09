import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Foo from '../../src/Foo';


// Setup
// Convenience method, especially useful when your component has alot of parameters
const makeShallow = (r) => shallow(<Foo />);

// Test suite
// Don't use es6 Arrow functions because it has some scoping confusion (with 'this')
describe("A suite", function() {
  it("Contains spec with an expectation", function() {
    expect(makeShallow().contains(<div className="foo" />)).to.equal(true);
  });

  it("Contains spec with an expectation", function() {
    expect(makeShallow().is('.foo')).to.equal(true);
  });

  it("Contains spec with an expectation", function() {
    expect(makeShallow().find('.foo').length).to.equal(1);
  });

  xit("Ignored test", function(){
    // This is ignored
    expect(false)to.equal(true);
  })
});
