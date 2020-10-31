/*

You can update the state in a Stateful Component. Use this.setState(): pass the object with the prop(s) from the initial state object in the constructor you want to update.

*/


// Stateful Component.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    // Initial State Object.
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Updating the state object through an onClick function.
    this.setState({
      name: "React Rocks!"
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
