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
    var children = [];
    this.state.alerts.forEach(function(alert){
      var className = "alert alert-block alert-" + alert.type;

      children.push(
        <AlertMessage key={alert.key} alert={alert} />
      );
    });

    return (
      <div {...this.props}>{children}</div>
    );
  }
});
