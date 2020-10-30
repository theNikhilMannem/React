/*

You can easily develop a React Component from Scratch: Use the 'class' keyword of ES6 and extend that class with the 'React.Component'.

Then, build-the-class-up inside. Call for the constructor with 'props', and also a 'super()' method inside it.

Return inside the 'render()' method, the JSX: something like a 'div' and an 'h1' inside it with some text.

Further ahead and finally, call for the 'ReactDOM.render(<ComponentToRender />, targetNode)'.

*/


// The React (Class) Component.
class MyComponent extends React.Component {
    
    // The constructor with props.
    constructor(props) {
        
        // The super() method calling the constructor of the parent class (React.Component), also with props to make sure the component has been initialized properly.
        super(props);
    }

    // The render() method of the Class Component.
    render() {
        
        // Return for the render() method above.
        return (
            
            // The JSX: a div enclosing an h1 with some text.
            <div>
              <h1>My First React Component!</h1>
            </div>
        );
    }
}

// Calling the ReactDOM.render() with the Class Component and the DOM node (here, a 'div' element with the Id of 'chalenge-node').
ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));
