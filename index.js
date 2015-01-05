/**
  var Alerts = require("./alerts");

  var MyComponent = React.createClass({
    addAlert: function(){
      Alerts.add('hello world', 'success');
    },

    render: function(){
      return <Alerts.Container />;
    }
  });
 */

module.exports = require('./src');
