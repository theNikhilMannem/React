/*

A Stateful Component in React is a Component that has its own internal state. In React, 'state' is one of the most important features.
It consists of any data your application needs to know about, that can change over time.

If you want to declare a 'state' property, must be done in a class component, and in it's constructor after the super() method.

*/


// A Class Component.
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    
    // The 'state' property.
    this.state = {
      name: "Nick"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
