/*

You can render the state of a Stateful component in the UI.
You just have to use the 'this' keyword and the 'state' property to access the prop inside of the state you declared in the constructor of the Stateful Component.

*/


// Stateful Component.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    // state of the component, declared.
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Accessing the state prop in the render()'s return: inside the 'h1' element.
    return (
      <div>
      <h1>{this.state.name}</h1>
      </div>
    );
  }
};
