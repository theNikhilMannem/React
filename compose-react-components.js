/*

You can also compose the React Class Components (that are created by the ES6 style 'class' syntax extending the React.Component), just like the Stateless Functional Components.
It is the same to render class components as the simple components!

*/


// A class component to be nested.
class NonCitrus extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    <ul>
      Non-Citrus:
      <li>Apples</li>
      <li>Blueberries</li>
      <li>Strawberries</li>
      <li>Bananas</li>
    </ul>
  }
}

// A class component to be nested.
class Citrus extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    <ul>
      Citrus:
      <li>Lemon</li>
      <li>Lime</li>
      <li>Orange</li>
      <li>Grapefruit</li>
    </ul>
  }
}

// A class component nesting the 'NonCitrus' and 'Citrus' class components.
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus />
        <Citrus />
      </div>
    );
  }
};

// A class component to be nested.
class Vegetables extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    <ul>
      Vegetables:
      <li>Brussel Sprouts</li>
      <li>Broccoli</li>
      <li>Squash</li>
    </ul>
  }
}

// A class component nesting all the components defined earlier. '<Fruits />' contain the 'NonCitrus' and 'Citrus' class components above.
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
