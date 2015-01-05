/** @jsx React.DOM */

jest.dontMock('../Alerts');
jest.dontMock('react');
jest.dontMock('reflux');

describe('Alerts', function() {
  var React = require('react/addons');
  var Alerts = require('../Alerts');
  var TestUtils = React.addons.TestUtils;

  it('contains no children by default', function() {
    var container = TestUtils.renderIntoDocument(
      <Alerts />
    );

    expect(container.state.alerts.length).toEqual(0);
    expect(container.getDOMNode().tagName).toEqual('DIV');
    expect(container.getDOMNode().textContent).toEqual('');
  });

  it('renders an alert', function() {
    var container = TestUtils.renderIntoDocument(
      <Alerts />
    );

    container.setState({
      alerts: [<span key="foo">alert</span>]
    });

    var span = TestUtils.findRenderedDOMComponentWithTag(
      container, 'span');
    expect(span.getDOMNode().textContent).toEqual('alert');
  });

});
