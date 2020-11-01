/*

You can style the JSX using the Stylesheets and also using the inline styles: there are some differences in doing so!

Instead of "class" in HTML, you gotta use "className", and instead of passing a string to "style" attribute in an HTML element, use an object: also use "camelCase" instead of "kebab-case", i.e., <div style={{color: "blue", fontSize: "50px"}}></div>

*/


// Class Component.
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: "72px"}}>Big Red</div>
    );
  }
};
