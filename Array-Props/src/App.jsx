import './App.css'
import Product from "./Product.jsx"
function App() {
  let features = ["Intel i5 Processor", "8GB RAM", "512GB SSD", "15.6 inch Display", "Windows 11"]
  return (
    <>
      <Product Name ="Laptop" Price={9999} features={features}/>
    </>
  )
}

export default App
