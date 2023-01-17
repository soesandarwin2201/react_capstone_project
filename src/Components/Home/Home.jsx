import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bug from './Bug';
import { getBugData } from '../../Redux/BugApi';

const Home = () => {
  const { filterBugs } = useSelector((store) => store.bugs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBugData());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
   <>
     <section className="bugs-container container mt-5">
       <ul className="d-flex flex-row bug-lists">
        {filterBugs && filterBugs.map((bug) => (
         <Bug
           key={bug.id}
           // eslint-disable-next-line react/jsx-props-no-spreading
           {...bug}
         />
        ))}
       </ul>
     </section>
   </>
  );
};

export default Home;
