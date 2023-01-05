import React from 'react';
import { useNavigate } from 'react-router-dom';
import {AiOutlineHeart} from 'react-icons/ai';
import { HiViewGridAdd } from 'react-icons/hi';

const Bug = (props) => {
  const bug = props;
  const navigate = useNavigate();

  const detailLink = () => {
    navigate('/Details',{state : bug} )
  }
 return (
   <>
     <div className='single-card'>
       <div className='icon-container'>
         <AiOutlineHeart
           className='heart-icon'
         />
         <HiViewGridAdd className='see-more' onClick={() => {detailLink()}} />
       </div>
       <div className='img-container'>
         <img src={bug.icon_uri} alt='cute bug' />
       </div>
       <div className='bug-info'>
         <p className='bug-name'>{bug['file-name']}</p>
       </div>
     </div>
   </>
 );
}
 
export default Bug;