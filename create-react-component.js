/*

Another wat of creating a React component, other than by JS function, is by using the ES6 'class' keyword.

The class keyword defines a class that extends the React.Component (which will hence be the parent of the created component).
We will have a constructor inside the component which calls the 'super()' method which is essestial for calling the constructor of the parent class (React.Component).
And, a 'render()' method to return the JSX.

*/


class MyComponent extends React.Component {
  // The constructor passed with properties.
  constructor(props) {
    // The super() method passed with properties.
    super(props);
  }
  render() {
    // Returning the JSX.
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
  }
};
