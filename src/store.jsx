/** @jsx React.DOM */

var Reflux = require("reflux");

var AlertMessage = require('./AlertMessage');
var alertActions = require('./actions');

// sequential counter to ensure each alert has a unique ID
var alertCounter = 0;

var alertStore = Reflux.createStore({
  listenables: actions,

  onAddAlert: function(message, type){
    if (React.isValidElement(message)) {
      this.alerts.push(message);
    } else {
      this.alerts.push(<AlertMessage type={type}>{message}</AlertMessage>);
    }
    this.trigger(this.alerts);
  },

  onCloseAlert: function(alert){
    this.alerts = this.alerts.filter(function(item){
      return item !== alert;
    });
    this.trigger(this.alerts);
  }
});

module.exports = alertStore;
