import React from 'react';
import { BsFillBugFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import './Navbar.css';

const Navbar = () => (
   <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
       <div className="container-fluid">
         <a className="navbar-brand" href="/">
           <BsFillBugFill className="logo" /> Polili
         </a>
         <button
           className="navbar-toggler"
           type="button"
         >
           <span className="navbar-toggler-icon" />
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
               <Link className="nav-link active" aria-current="page" to="/">
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

export default Navbar;
