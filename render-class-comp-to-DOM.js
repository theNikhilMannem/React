/*

Rendering a Class Component to the DOM just as same as the rendering of JSX elements using the ReactDOM API except for the first argument (ComponentToRender) to be enclosed in a self-closing tag.

Note that none of the React code you write will render to the DOM without making a call to the ReactDOM API.

*/


// Class Component to be rendered through ReactDOM API.
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};

// Rendering the Class Component: First argument being the ComponentToRender enclosed in self-closing tag, and second argument being the Id of an HTML DOM element (node).
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));
