/*

componentDidMount() method is called after a component is mounted to the DOM.

Any calls to setState() here will trigger a re-rendering of your component.

*/


// Class Component.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  // Below method is called after the component is mounted to the DOM.
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
