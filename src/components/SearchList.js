import React from 'react'
import {BiLike } from 'react-icons/bi';
import {Link } from "react-router-dom";

const SearchList = ({searchResults}) => {
  return (
    <>
 <div className='card'>
            {searchResults.map(item =>(
              <div className="one-card" key={item.id} >
              <img src={item.img} alt={item.title} className='photo' />
          <div className='item-info'>
            <header>
              <h4 className='list-title'>{item.title}</h4>
              <h4 className='reaction'>{item.reactions}<BiLike /></h4>
            </header>
            <p className='item-text'>{item.body}</p>
            <li className='posts-tag'> {(item.tags).map((tag)=>{return <h5>{tag}</h5>})} </li>
                </div>
                </div>))}
                  </div>
    </>
  )
}

export default SearchList 