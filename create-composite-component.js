/*

Just like you create a Simple React Component using certain 'div' or 'h1' (or any other element(s)) tags, you can create a Composite Component using the Simple Components themselves.

*/

// The Simple ChildComponent returning a 'div' element.
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

// The Composite ParentComponent wrapping the ChildComponent with the 'return' of the 'render()' method.
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent/>
      </div>
    );
  }
};
