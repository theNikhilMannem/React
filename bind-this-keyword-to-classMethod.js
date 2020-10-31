/*

You can define methods inside the class component. But, for the methods to be able to access the props, it should be bind with 'this'.

You can do it in the constructor: by adding 'this.methodName = this.methodName.bind(this);'

*/


// Class Component.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Binding this to a Class Method.
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    // Returning the JSX: handling the button click using the 'handleClick' class method defined above.
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
