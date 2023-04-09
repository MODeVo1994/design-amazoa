import Footer from "./components/Footer"
import Header from "./components/Header"
import { Loading } from "./components/Loading"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Products from "./pages/Products"

 
 
 
function App() {
 

  return (
    <div className='parent'>
      <div className="header_div">
       <Header/>
      <div className="products">
        products here
 





        



      </div>
      <div className="footer">
        <Footer/>
      </div>

      
      </div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/product/slug" element={<Products/>} />
        <Route path="/product/:id" element={<Products/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
