/*

React provides a lifecycle method you can call when child components receive new state or props, and declare specifically if the components should update or not.

The method is shouldComponentUpdate(), and it takes nextProps and nextState as parameters.

*/


// Child Class Component.
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  // Check to see if the new props (nextProps) is an even number.
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    if (nextProps.value % 2 != 0) {
      return false;
    }
    // console.log(nextProps.value);
    return true;
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

// Child Class Component.
class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
