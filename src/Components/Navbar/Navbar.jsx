import React from 'react';
import {BsFillBugFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import './Navbar.css';


const Navbar = () => {
 return (
   <>
     <nav class='navbar navbar-expand-lg bg-body-tertiary'>
       <div class='container-fluid'>
         <a class='navbar-brand' href='#'>
           <BsFillBugFill className='logo' /> Polili
         </a>
         <button
           class='navbar-toggler'
           type='button'
         >
           <span class='navbar-toggler-icon'></span>
         </button>
         <div class='collapse navbar-collapse' id='navbarSupportedContent'>
           <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
             <li class='nav-item'>
               <Link class='nav-link active' aria-current='page' to='/'>
                 Home
               </Link>
             </li>
           </ul>
           <Form />
         </div>
       </div>
     </nav>
   </>
 );
}
 
export default Navbar;