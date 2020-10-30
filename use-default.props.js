/*

React also has an option to set default props. You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary.
This allows you to specify what a prop value should be if no value is explicitly provided.

'defaultProps' is a property of the component to assign the default props.

*/


// The Component.
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};

// Assigning the default prop(s).
ShoppingCart.defaultProps = {
  items: 0
};
