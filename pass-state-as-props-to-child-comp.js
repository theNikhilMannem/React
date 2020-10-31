/*

props in Child Component are sent in React through the Parent Component: A common pattern is to use a 'state' to have the props, and then let the Child Components have access to some pieces (props) of it based on requirement.

*/


// Parent Component.
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    // state in Parent Component.
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    // Returning the JSX: accessing the name prop of the state.
    return (
       <div>
         <Navbar name={this.state.name} />
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Returning the JSX: displaying the name prop of the state in the Parent component that has been passed to Child (this component) through 'props'.
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};
