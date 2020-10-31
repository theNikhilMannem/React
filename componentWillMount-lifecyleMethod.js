/*

The componentWillMount() method is called before the render() method when a component is being mounted to the DOM.

*/


// Class Component.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  // lifecycle method.
  componentWillMount() {
    console.log("hey!");
  }
  render() {
    return <div />
  }
};
