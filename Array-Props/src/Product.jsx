function Product({ Name, Price, features}) {
  return (
    // - Created Product component to display product details.
    // - Used props to pass Name, Price, and features.
    // - Rendered features dynamically using JavaScript map() inside <ol>.
    // - Good example of how to handle lists and props in React.
    <div>
      <h1>Product Name {Name}</h1>
      <h4>Price is {Price}</h4>
      <ol>
        {features.map((item) => {
          return <li>{item}</li>;
        })}
      </ol>
      
    </div>
  );
}
export default Product;

