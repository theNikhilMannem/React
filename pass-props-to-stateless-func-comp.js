/*

In React, you can pass props, or properties, to child components.
Say you have an App component which renders a child component called CurrentDate which is a stateless functional component.
You can pass CurrentDate a user property by writing: 
<App>
  <CurrentDate date={Date()} />
</App>

Down here, we are using a Calendar component as a parent instead of App. Look at how the 'props' is accessed.
You can also add extra props to the child.

*/


const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
      <i>{props.extra}</i>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} extra={"Some extra prop!"} />
      </div>
    );
  }
};
