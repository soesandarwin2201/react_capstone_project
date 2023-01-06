import React  from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Bug from './Bug';
import { getBugData } from '../../Redux/BugApi';

const Home = () => {
  const {bugs, filterBugs , isLoading } = useSelector((store) => store.bugs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBugData());
  },[]);
  
 return (
   <>
     <section className='bugs-container container mt-5'>
       <ul className='d-flex flex-row bug-lists'>
        {filterBugs && filterBugs.map(bug => (
         <Bug  key={bug.id} {...bug}
         />
        ))}
       </ul>
     </section>
   </>
 );
}
 
export default Home;