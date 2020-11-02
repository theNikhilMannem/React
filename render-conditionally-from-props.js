/*

'props', one of the powerful features of React can be used to render components conditionally.

*/


// Child Component.
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Just making sure that the value is of type boolean (true or false).
    console.log(typeof this.props.fiftyFifty);
    // Returning the JSX: based on the condition that if the prop 'fiftyFifty' is true, "You Win!", else "You Lose!" in 'h1'.
    return (
      <h1>{
        this.props.fiftyFifty
        ? "You Win!"
        : "You Lose!"
      }</h1>
    );
  }
}

// Parent Component.
class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Incrementing the counter by 1 for every click to track the number of times the button clicked totally.
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    // Expression to store the boolean value generated randomly: Math.random() generates random value between 0 (inclusive) and 1 (exclusive),
    // and comparing it with .5 gives a 50/50 odds (Statistically, it's said to return true half of the time and false other half).
    const expression = Math.random() >= .5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression} />
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
