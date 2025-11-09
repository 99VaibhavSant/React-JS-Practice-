import './App.css'
import Product from "./Product.jsx"
function App() {
  let Games = {
    action: ["God of War", "Uncharted", "Spider-Man"],
    racing: ["Gran Turismo", "Gran Turismo 7", "Need for Speed"],
    adventure: ["The Last of Us", "Horizon Zero Dawn", "Tomb Raider"],
    sports: ["FIFA 23", "NBA 2K23", "Madden NFL 23"]
  }
  return (
    <>
      <Product Title = "Top Games Collection" Games={Games} />
    </>
  )
}

export default App
