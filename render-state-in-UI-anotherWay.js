/*

You can also render the state of the Stateful Component in the UI in another way.
Use a variable to store the state prop within the render() method, above the return statement: in that part of the code, you can use JavaScript for variables, functions and all JS can do!

*/


// Stateful Component.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Declaring the variable as a constant naming it as 'name', and storing in it the value of state prop 'name'.
    const name = this.state.name;
    return (
      <div>
       <h1>{name}</h1>
      </div>
    );
  }
};
