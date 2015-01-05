/** @jsx React.DOM */

jest.dontMock('../Alerts');
jest.dontMock('react');
jest.dontMock('reflux');

describe('Alerts', function() {
  it('works at all', function() {
    var React = require('react/addons');
    var Alerts = require('../Alerts');
    var TestUtils = React.addons.TestUtils;

    var container = TestUtils.renderIntoDocument(
      <Alerts />
    );

    expect(container.getDOMNode().tagName).toEqual('DIV');
    expect(container.state.alerts.length).toEqual(0);

    container.setState({
      alerts: [<span key="foo">alert</span>]
    });

    var span = TestUtils.findRenderedDOMComponentWithTag(
      container, 'span');
    expect(span.getDOMNode().textContent).toEqual('alert');
  });
});
