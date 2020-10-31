/*

You can toggle (change the state of) an element using the state props.
You have to add a class method to do that stuff, i.e., to change the prop in the state so that the element is toggled based on the props given through the method.

*/


// Class Component.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    / Binding the Class Method with 'this'.
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  // Class Method to toggle the element in the opposite value (boolean) of prop (visibility), i.e., true, if false, and false, if true.
  toggleVisibility() {
    this.setState((state) => ({
      visibility: !state.visibility
    }));
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
