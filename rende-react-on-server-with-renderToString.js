/*

The renderToString() method is provided on ReactDOMServer. The method takes one argument which is a React element.

You can use this method to render a React Component to a String.

*/


// Class Component.
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// Rendering the 'App' Component to String.
ReactDOMServer.renderToString(<App />);
