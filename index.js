/**
  var Alerts = require("./alerts");

  var MyComponent = React.createClass({
    addAlert: function(){
      Alerts.add(<Alerts.Message type="success">hello world</Alerts.Message>);
    },

    render: function(){
      return <Alerts.Alerts />;
    }
  });
 */


module.exports = require('./src');
