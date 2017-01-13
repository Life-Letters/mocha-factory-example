import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

// Componentry
import Foo from '../../src/Foo';
import SearchBar from '../../src/SearchBar';

// Styles
import styles from '../../src/styles.scss';

// Setup
// Convenience method, especially useful when your component has alot of parameters
const makeShallow = (r) => shallow(<Foo />);

// Test suite
// Don't use es6 Arrow functions because it has some scoping confusion (with 'this')
describe("Testing Component", function() {

  it("Contains an element with class 'foo' - find elements", function() {
    expect(makeShallow().is('.foo')).to.equal(true);
  });

  it("Contains only a single element with class 'foo' - counting elements", function() {
    expect(makeShallow().find('.foo').length).to.equal(1);
  });

  it('Passes loading:true to ImageDisplay - prop checking',  function() {
    const wrapper = makeShallow();
    const imageDisplay = wrapper.find('ImageDisplay');
    expect(imageDisplay.prop('loading')).to.equal(true);
  });

  it('Reach search for cats - spy on methods',  function() {
    const onSearchStub = sinon.spy();
    const wrapper = shallow(<SearchBar onSearch={onSearchStub}/>);
    const imageDisplay = wrapper.find('ImageDisplay');
    const searchField = wrapper.find('input');
    const event1 = {target: {value: 'cat'}};
    const event2 = {target: {value: 'cats'}};

    searchField.simulate('change', event1);
    searchField.simulate('change', event2);

    expect(onSearchStub.calledTwice).to.equal(true);
  });

  it('Stubbed getGif', function(){

      // Note this will be using the REAL getGif()
      const Foo = makeShallow();
      const mockedUrl = 'https://www.google.com.au/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

      // We'll stub $.get so a request is not sent
      var get = sinon.stub($, 'get');
      get.yields();

      // Make a stub for the function we want to override
      var stub = function(tagName){
        return mockedUrl;
      };

      // Stub it
      getGif('cat', stub);

      // Simulate the search
      const searchField = Foo.find('input');
      searchField.simulate('change', {target: {value: 'cat'}});

      // Make sure shit works

      // Gotta restore it
      get.restore();
      sinon.assert.calledOnce(callback);


  });

  xit("Ignored test", function(){
    // This is ignored - Used to test CI When fail
    expect(false).to.equal(true);
  })
});
