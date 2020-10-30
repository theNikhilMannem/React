/*

You can access the props in a Stateless Functional Component using {props.propName} syntax in the JSX.
But, when the Component is an ES6 Class Component, it doesn't work. There is a slightly different syntax: you just have to preface (prefix) the normal syntax with the 'this' keyword.

The 'this' keyword refers to the properties of that particular context (i.e., in a function, it refers to the properties of that function when used before the properties with a dot notation).

*/


// Child Component.
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    // Returning the JSX with the prop being accessed by the 'this' keyword.
    return (
        <div>
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
        </div>
    );
  }
};

// Parent Component.
class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          <ReturnTempPassword tempPassword={"achillesheel"} />
        </div>
    );
  }
};
