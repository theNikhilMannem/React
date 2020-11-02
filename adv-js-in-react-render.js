/*

Here, we exhibiting the usage of advanced JavaScript in the render() method of the Reat Component: where we can use pure JS without inserting it inside of the curly braces ({}).

The 1980's Classic Magic Eight Ball toy game was used as an application to showcase this behaviour!

*/


// Style constant.
const inputStyle = {
  width: 235,
  margin: 5
};

// Class Component.
class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // onClick action of the Button in question.
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  // Handling the change in the user input as user enters (types).
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    // An array of possible answers found in the Magic Eight Ball toy.
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    // Storing the randomly generated answer through the randomIndex of the possibleAnswers array.
    const answer = possibleAnswers[this.state.randomIndex];
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {answer}
        </p>
      </div>
    );
  }
}
