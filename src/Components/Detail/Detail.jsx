import React from 'react';
import data from '../../apidata';

const Details = () => {
 return (
   <>
     <div className='bug-detail-container'>
       {data.map((bug) => (
         <div className='single-bug'>
           <h1 className='bug-name'>{bug['file-name']}</h1>
           <img src={bug.image_uri} alt='cute bug' />
           <div className='span-container'>
             <span>{bug.price}</span>
             <span>{bug['price-flick']}</span>
             <span>{bug.id}</span>
           </div>
           <div className="bug-info">
            <p>{bug['catch-phrase']}</p>
            <p>{bug['museum-phrase']}</p>
           </div>
         </div>
       ))}
     </div>
   </>
 );
}
 
export default Details;