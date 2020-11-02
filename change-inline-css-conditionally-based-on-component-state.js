/*

Using the conditional rendering and use of inline styles concepts combinedly, we can render the CSS conditionally based on the Component's state.

*/


// Class Component.
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    // Component's state, initially.
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    // Initial CSS style defined to be used as inline.
    let inputStyle = {
      border: '1px solid black'
    };
    // Modifying the initial CSS based on the state of the component: if the length of the 'input' prop of the state is greater than 15, inputStyle is changed.
    if (this.state.input.length > 15) {
      inputStyle.border = "3px solid red";
    }
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
