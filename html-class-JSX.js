/*

This is to spell the difference between JSX and HTML, although they look very similar.

The 'class' in HTML is no longer 'class' in JSX. JSX uses 'className' instead.

And, a subtle, yet important to know is, the naming convention for all HTML attributes and event references in JSX becomes camelCase: 'onclick' becomes 'onClick', and likewise, 'onchange' becomes 'onChange'.

*/

// An example to demonstrate that usage..

const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

