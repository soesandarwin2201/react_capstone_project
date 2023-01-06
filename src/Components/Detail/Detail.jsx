import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CgArrowLeftR } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';
import './Detail.css';


const Details = () => {
  const location = useLocation();
  const bug = location.state;
  const navigate = useNavigate();

  const HomeLink = () => {
    navigate('/', { state: bug });
  };

 return (
   <section>
     <div className='bug-detail-container'>
       <div className='single-bug'>
         <div className='detail-img-container'>
           <img src={bug.image_uri} alt='cute bug' className='bug-img' />
         </div>
         <div className='bug-details-info'>
           <div className='name-container'>
             <p className='bug-name'> {bug['file-name']}</p>
             <AiOutlineHeart className='heart-icon' />
           </div>
           <div className='price-info'>
             <p className='bug-price'> ${bug.price}</p>
             <p className='price-flick'>${bug['price-flick']}</p>
           </div>
           <div className='bug-info'>
             <h4>About {bug['file-name']} </h4>
             <p>{bug['catch-phrase']}</p>
             <ul className='abilities'>
               <li>
                 <p>Common</p>
                 <p>{bug.name['name-CNzh']}</p>
               </li>
               <li>
                 <p>Location</p>
                 <p>{bug.availability['time']}</p>
               </li>
             </ul>
           </div>
         </div>
       </div>
       <CgArrowLeftR
         className='see-more'
         onClick={() => {
           HomeLink();
         }}
       />
     </div>
   </section>
 );
}
 
export default Details;