function Product({ Title, Games }) {
  // - Added Product component that accepts an object (Games) as a prop.
  // - The Games object contains two arrays: 'action' and 'racing'.
  // - Used object destructuring and .map() to render lists dynamically.
  // - This demonstrates how to access and iterate over object properties passed via props.

  return (
    <div>
      <h1>{Title}</h1>
      <p>
        {Games.action.map((item) => {
          return <li>{item}</li>;
        })}
      </p>
      <p>
        {Games.racing.map((item) => {
          return <li>{item}</li>;
        })}
      </p>
    </div>
  );
}

export default Product;
