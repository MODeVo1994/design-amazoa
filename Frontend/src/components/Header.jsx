import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './header.css'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
const [show,setShow]=useState(false)

return (
    <div>
        <div className="div_forHeader">

        <div className="icon_container">
            <div className="ison">
            <ShoppingCartIcon/>

            </div>
            <div className="search">
                <input type="text" placeholder='search products'/>

                <div className="isssson">


                <SearchIcon/>
                </div>

            </div>
        </div>

        <div className="home_profile">
            <div className="home">home</div>
            <button onClick={ ()=> setShow(!show)}>profile</button>

            {show &&   <div className="profile">
                <p>o</p>
                <p>privious</p>
                <p>log out</p>

            </div>}
          

        </div>

        </div>

    </div>
  )
}

export default Header