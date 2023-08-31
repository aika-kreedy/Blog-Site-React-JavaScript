
import React from 'react';
const Catagries = ({category,filterList}) => {

  return (
<div>
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
export default Catagries;

