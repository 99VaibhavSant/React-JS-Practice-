function doSomthing() {
  // console.log("Click Me");
  alert("Hello! I am an alert box!!");
}

function Button() {
  //     - Created a Button component that renders a simple clickable button.
  // - Added an event handler function 'doSomthing' that logs a message to the console.
  // - Demonstrates how to use the onClick event in React.
  // - Shows how to pass a function reference (not a function call) to the onClick attribute.

  return (
    <div>
      <button onClick={doSomthing}>Click Me</button>
    </div>
  );
}

export default Button;


