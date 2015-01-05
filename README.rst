This project is a work in progress.

An attempt to implement reusable flash message / alerting using the React + Reflux stack.

The built-in implement follows Bootstrap3's markup conventions.

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


Because an alert is any valid component, you can also pas your own custom HTML or components:

.. code-block:: Jsx

	Alerts.add(<div className="alert">An arguably less useful version of an alert</div>);
