/*

Just like you pass a text or something like Date() (which is a JS function returning today's date), you can pass Arrays to Child Component.

You have to use {} for to be treated as JavaScript, since [] is the array syntax which is considered not as array while you use it directly when assigning to a property.

*/


// Child Component, where props are displayed.
const List = (props) => {
  return <p>{props.tasks.join(',')}</p>
};

// Parent Component, where Child Component is: passed with props, and is displayed inside.
class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["Read War and Peace", "Practice React"]} />
        <h2>Tomorrow</h2>
        <List tasks={["Read 5 AM Club", "Practice More React", "Workout a Little"]} />
      </div>
    );
  }
};
