/*

Rendering an HTML element to DOM.

The 'ReactDOM' is React's rendering API: we can render the JSX directly to the HTML DOM using this API's 'render(componentToRender, targetNode)' method - first argument being the JSX, the second being the DOM node you want to render the component to.

*/


const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);

ReactDOM.render(JSX, document.getElementById("challenge-node"));

/*
Printing out the log of the render() would give us the following JSON:

{ '__reactInternalInstance$ue1sn14d2v': 
   { tag: 5,
     key: null,
     type: 'div',
     stateNode: [Circular],
     return: 
      { tag: 3,
        key: null,
        type: null,
        stateNode: [Object],
        return: null,
        child: [Circular],
        sibling: null,
        index: 0,
        ref: null,
        pendingProps: null,
        memoizedProps: null,
        updateQueue: [Object],
        memoizedState: [Object],
        mode: 0,
        effectTag: 32,
        nextEffect: null,
        firstEffect: [Circular],
        lastEffect: [Circular],
        expirationTime: 0,
        alternate: [Object] },
     child: 
      { tag: 5,
        key: null,
        type: 'h1',
        stateNode: [Object],
        return: [Circular],
        child: null,
        sibling: [Object],
        index: 0,
        ref: null,
        pendingProps: [Object],
        memoizedProps: [Object],
        updateQueue: null,
        memoizedState: null,
        mode: 0,
        effectTag: 0,
        nextEffect: null,
        firstEffect: null,
        lastEffect: null,
        expirationTime: 0,
        alternate: null },
     sibling: null,
     index: 0,
     ref: null,
     pendingProps: { children: [Object] },
     memoizedProps: { children: [Object] },
     updateQueue: null,
     memoizedState: null,
     mode: 0,
     effectTag: 0,
     nextEffect: null,
     firstEffect: null,
     lastEffect: null,
     expirationTime: 0,
     alternate: null },
  '__reactEventHandlers$ue1sn14d2v': { children: [ [Object], [Object] ] } }
*/
