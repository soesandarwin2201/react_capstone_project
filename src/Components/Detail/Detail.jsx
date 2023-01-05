import React from 'react';
import { useLocation } from 'react-router-dom';
import Bug from '../Home/Bug'


const Details = () => {
  console.log('it id render');
  const location = useLocation();
  const bug = location.state;
 return (
   <>
   <h1>It is details</h1>
   <p>{bug.id}</p>
     
     <div className='bug-detail-container'>
       <div className='single-bug'>
         <h1 className='bug-name'>{bug['file-name']}</h1>
         <img src={bug.image_uri} alt='cute bug' />
         <div className='span-container'>
           <span>{bug.price}</span>
           <span>{bug['price-flick']}</span>
           <span>{bug.id}</span>
         </div>
         <div className='bug-info'>
           <p>{bug['catch-phrase']}</p>
           <p>{bug['museum-phrase']}</p>
         </div>
       </div>
     </div>
   </>
 );
}
 
export default Details;