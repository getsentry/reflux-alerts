/*** @jsx React.DOM */

var React = require("react");
var Reflux = require("reflux");
var alertStore = require('./store');

var AlertMessage = React.createClass({
  propTypes: {
    message: React.PropTypes.string.isRequired,
    type: React.PropTypes.string
  },

  closeAlert: function() {
    alertStore.closeAlert(this);
  },

  render: function() {
    var className = this.props.className || 'alert';
    if (this.props.type !== '') {
      className += 'alert-' + this.props.type;
    }

    return (
      <div className={className}>
        <div className="container">
          <a className="close" onClick={this.closeAlert}>×</a>
          <span className="icon icon-checkmark"></span>
          <span className="icon icon-x"></span>
          {this.props.message}
        </div>
      </div>
    );
  }
});

module.exports = AlertMessage;
