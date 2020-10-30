/*

Although the ability to set default props in React is useful, we might still need to override the default-set props.

The way to do it is to explicitly set the values for the props for a component.

*/


// The Component.
const Items = (props) => {
  // {} is needed when using JS inside JSX.
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

// Defaultly set to '0'.
Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Explicitly setting the prop value, 'quantity', to '10'.
    return <Items quantity={10} />
  }
};
