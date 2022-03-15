import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import {  } from "react-icons/bi";
import { RiShoppingCartFill } from "react-icons/ri";
import { CgLogIn} from "react-icons/cg";

export default function Header() {



  return (
    <div>
        <nav class="navbar navbar-light Header">

                <div>
                <a class="navbar-brand brand h1 " href="#Header">
                    Bootstrap
                </a>
                </div>
                <span className='items'>
                <form class="form my-2 my-lg-0">
                   <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> 
                 </form>
                 <button class="btn button" type="submit">Search</button>
                 </span>

                <div class='buttonmargin'>
                
                <button type="button" class="btn btn-sm button"><CgLogIn/>    Login</button>
                <button type="button" class="btn btn-sm button"><RiShoppingCartFill/>    Cart</button>
                </div>
                    
                    
                    
                    
                

            </nav>


    </div>
  )
}

