/*** @jsx React.DOM */

var React = require("react");
var Reflux = require("reflux");
var alertStore = require('./store');

var Alerts = React.createClass({
  propTypes: {
    alert: React.PropTypes.shapeOf({
      key: React.PropTypes.any.isRequired,
      message: React.PropTypes.any.isRequired,
      type: React.PropTypes.any.isRequired
    }).isRequired
  },

  closeAlert: function(alert) {
    alertStore.closeAlert(alert.key);
  },

  render: function() {
    var className = this.props.className || 'alert';
    if (this.props.alert.type !== '') {
      className += 'alert-' + this.props.alert.type;
    }

    return (
      <div className={className}>
        <div className="container">
          <a className="close" onClick={this.closeAlert.bind(this, alert)}>×</a>
          <span className="icon icon-checkmark"></span>
          <span className="icon icon-x"></span>
          {alert.message}
        </div>
      </div>
    );
  }
});
