/*

You can define the type of props you can accept using the 'propTypes' property of a Component.

Component.propTypes = {
  someProp: PropTypes.number.isRequired
};

Above syntax should be used to define the type of the prop we except for that particular prop (someProp).

*/


// The Component.
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Defining the propTypes to be expected.
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};

// Defaultly setting the 'quantity' prop to '0'.
Items.defaultProps = {
  quantity: 0
};

// Parent Component, returning the Items component with the default prop as quantity, with type 'number' and as a 'required' prop (returns an error if that prop is not passed).
class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
