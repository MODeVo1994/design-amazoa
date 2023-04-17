import Footer from "./components/Footer"
import Header from "./components/Header"
import { Loading } from "./components/Loading"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"

 
 
 
function App() {
 

  return (
    <div className='parent'>
      <div className="header_div">
       <Header/>
      <div className="products">
         
 





        



      </div>
      <div className="footer">
        <Footer/>
      </div>

      
      </div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/product/:slug" element={<ProductDetails/>} />
        <Route path="/product/:id" element={<Products/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
