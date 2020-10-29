/*

The thing about Self-Closing tags in JSX is that they could be either '<div> </div>' when there is content to be filled in it, or just '</div>' if there's no content to be filled in it.

Note that the ending of self-closing tag with a '/' is mandatory in JSX (unlike in HTML, where we can omit it) : '<div/>' is alright for an empty 'div', but, '<div>' isn't!

Also, in HTML, we don't use an empty 'div' as '<div/>'. That's a notable difference in JSX.

*/

const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br/>  // <br> is invalid, so, <br/>
    <p>Be sure to close all tags!</p>
    <hr/>  // <hr> is invalid, so, <hr/>
  </div>
);
