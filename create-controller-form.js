/*

Just like 'input' and 'textarea' form elements, the 'form' element's internal state can also be controlled by React.

*/


// Class Component.
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // Class Method to handle input change as user types.
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  // Class Method to handle button submit event and set the submit prop of the state to the current the input value.
  handleSubmit(event) {
    this.setState({
      submit: this.state.input
    });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
