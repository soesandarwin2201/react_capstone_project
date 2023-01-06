import React , {useState} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {filterReducer } from '../../Redux/BugApi';

const Form = () => {
  const bugs = useSelector(store => store.bugs);
  const [search , setSearch] = useState('');
  const dispatch = useDispatch();
  
  
  const handleInput = (e) => {
    dispatch(filterReducer(e.target.value));
    setSearch(e.target.value);
  }
 return ( 
  <form className='d-flex' role='search'>
             <input
               className='form-control me-2'
               type='search'
               placeholder='Search.....'
               aria-label='Search'
               value={search}
               onChange={handleInput}
             />
             
           </form>
  );
}
 
export default Form;