/*

You can use an if-else absolutely in the render() method of the React Component, just like in JS.

Follow the example below: A boolean value of the state in the component is used to toggle the display of some text using a button click based on the truthiness of the 'display' value.

*/


// Class Component.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    // A boolean value to toggle the display.
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  // Method to toggle the display value: true to false, then, false to true ...
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Checking the condition with the display's boolean value to display the text if it's true: the text displayed being the 'h1' element.
    if (this.state.display) {
      return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
       </div>
    );
    }
    // Otherwise (other than the if condition (i.e., true)), false: don't display the text: the text displayed being the 'h1' element.
    else {
      return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
       </div>
    );
    }
  }
};
