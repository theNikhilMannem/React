/*

Instead of writing multiple lines of code for the conditions 'if-else-if', you can use the '&&' for use right inside the JSX to mention a condition and return a markup if it's true, false otherwise!

Follow the example below to understand to how to use it: Same functionality as in 'if/else' condition (render-with-if-else-condition.js), but, using lesse code and better code organization practice.

*/


// Class Component.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Returning the JSX with a condition that returns the markup 'h1' if the condition is true, else nothing.
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
