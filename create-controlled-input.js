/*

The form control elements such as input and textarea maintain their own state in the DOM as the user types. You can move this to React's component's state with React.
The user's input becomes a part of the application state, so React controls the value of that input field.

*/


// Class Component.
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Binding the Class Method with 'this'.
    this.handleChange = this.handleChange.bind(this);
  }
  // Class Method to handle the change in the state's input prop as the user types.
  handleChange(event) {
    this.setState(() => ({
      input: event.target.value
    }));
  }
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange} />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
