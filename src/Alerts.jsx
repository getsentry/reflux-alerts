/*** @jsx React.DOM */

var React = require("react");
var Reflux = require("reflux");

var alertStore = require('./store');
var AlertMessage = require('./AlertMessage');

var Alerts = React.createClass({
  mixins: [Reflux.connect(alertStore, "alerts")],

  getInitialState: function() {
      return {
          alerts: []
      };
  },

  closeAlert: function(key) {
    alertStore.closeAlert(key);
  },

  render: function() {
    return (
      <div {...this.props}>{this.state.alerts}</div>
    );
  }
});


module.exports = Alerts;
