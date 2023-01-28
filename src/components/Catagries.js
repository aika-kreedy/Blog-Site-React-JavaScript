
import React from 'react';
const Catagries = ({category,filterList}) => {

  return (
<div className='catagories-list'>
      {category.map((ca,index)=>{
         return (
          <button
 type='button'
 className="filter-btn" 
 key={index} 
 onClick={()=>filterList(ca)}>
   {ca}</button>
         )})}
</div>
) 
}
  {/*<h4>{selects}</h4>
    <select  className='dropdown-category' value={selects}
     onChange={e=>(e.target.value)}>
<option value = "All" ></option>
<option  value ="Classic" >Classic</option>
<option value ="Magical">Magical</option>
<option value ="History">History</option>
<option value ="Love">Love</option>
<option value ="Mystery">Mystery</option>
</select>
*/}


export default Catagries;

