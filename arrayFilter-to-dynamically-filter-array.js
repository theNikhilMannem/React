/*

Another method related to map is filter, which filters the contents of an array based on a condition, then returns a new array.

For example, if you have an array of users that all have a property online which can be set to true or false, you can filter only those users that are online by writing:
let onlineUsers = users.filter(user => user.online);

*/


// Class Component.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    // extracting (filtering) the users those are online.
    const usersOnline = this.state.users.filter(user => user.online);
    // Just ensuring it worked.
    console.log(usersOnline);
    // mapping over the usersOnline array to render an 'li' to each of them.
    const renderOnline = usersOnline.map(userOnline => <li key={usersOnline.indexOf(userOnline)}>{userOnline.username}</li>);
    // console.log(renderOnline);
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
