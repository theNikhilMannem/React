/*

Ternary expression is quite common among developers for quicker and organized use of the if-else statement.

Basic Syntax:
condition ? expressionIfTrue : expressionIfFalse;

*/



const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      userAge: ''
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {
          // Usage of Ternary Operator instead of if-else.
          this.state.userAge === ''
          ? buttonOne
          : this.state.userAge < 18
          ? buttonThree
          : buttonTwo
        }
      </div>
    );
  }
}
