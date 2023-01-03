import React from 'react';

const Bug = (props) => {
  const bug = props;
 return (
   <>
      <div className="card" style={{ width : '10rem' , height : '10rem'}}>
     <img class="card-img-top" src={bug.icon_uri} alt="Card image cap" />
      </div>

   </>
 );
}
 
export default Bug;