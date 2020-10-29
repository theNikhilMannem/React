/*

A Complex JSX element: assigning it to a const type of variable 'JSX'.
'div' is the parent element wrapping all other child elements, i.e., 'h1', 'p', 'ul' (and 'li' inside 'ul'). It is required as a parent wrapper ('div' or any other element, but, a parent wrapper is must)!
Since nested JSX must return a single element, the single parent is needed. This one element could wrap all the other levels of nested elements (child(ren)).

*/

const JSX = <div>
    <h1>Heading 1</h1>
    <p>Paragraph 1</p>
    <ul>
      Unordered List
      <li>List Item 1</li>
      <li>List Item 2</li>
      <li>List Item 3</li>
    </ul>
  </div>;
  
  console.log(JSX);
  
/*
The log prints out the following:

{ '$$typeof': {},
  type: 'div',
  key: null,
  ref: null,
  props: { children: [ [Object], [Object], [Object] ] },
  _owner: null }
*/
