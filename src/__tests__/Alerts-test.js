/** @jsx React.DOM */

jest.dontMock('../Alerts');
jest.dontMock('react');
jest.dontMock('reflux');

describe('Alerts', function() {
  it('renders', function() {
    var React = require('react/addons');
    var Alerts = require('../Alerts');
    var TestUtils = React.addons.TestUtils;

    var container = TestUtils.renderIntoDocument(
      <Alerts />
    );

    // // Verify that it's Off by default
    // var label = TestUtils.findRenderedDOMComponentWithTag(
    //   checkbox, 'label');
    // expect(label.getDOMNode().textContent).toEqual('Off');

    // // Simulate a click and verify that it is now On
    // var input = TestUtils.findRenderedDOMComponentWithTag(
    //   checkbox, 'input');
    // TestUtils.Simulate.change(input);
    // expect(label.getDOMNode().textContent).toEqual('On');
  });
});
