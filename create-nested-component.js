/*

And, just like the Simple Component, and Composite Component (which wraps the simple component as a tag in it's to-be-returned JSX),
you can further nest the Composite Component in another Component which comprises the content of both former Components since Component already contains the Simple Component.

*/

// A Simple Component.
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

// A Composite Component wrapping the above Simple Component.
const Fruits = () => {
  return (
    <div>
      <TypesOfFruit/>
    </div>
  );
};

// Anothe Component nesting the Composite Component to contain the content of both of the above resultedly.
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits/>
      </div>
    );
  }
};
