This project is a work in progress and is not yet functional.

.. code-block:: jsx

    var Alerts = require("reflux-alerts");

    var MyComponent = React.createClass({
      addAlert: function(){
        Alerts.add(<Alerts.Message type="success">hello world</Alerts.Message>);
      },

      render: function(){
        return <Alerts.Alerts />;
      }
    });
