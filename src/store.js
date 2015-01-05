var Reflux = require("reflux");
var alertActions = require('./actions');

// sequential counter to ensure each alert has a unique ID
var alertCounter = 0;

var alertStore = Reflux.createStore({
  listenables: actions,

  onAddAlert: function(message, type){
    alertCounter++;
    this.alerts.push({
      key: alertCounter;
      message: message,
      type: type
    })
    this.trigger(this.alerts);
  },

  onCloseAlert: function(key){
    this.alerts = this.alerts.filter(function(alert){
      return alert.key != key;
    });
    this.trigger(this.alerts);
  }
});

module.exports = alertStore;
