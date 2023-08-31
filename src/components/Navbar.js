import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
<nav className='navbar-items'>
        <ul>
           <li><a href='/'> Home </a> </li>
           <li><a href='/about'> About </a></li>
           <li><a href='/write'> Write with us </a></li>
           <li> <a  href='/contact'> Contact </a></li>
        </ul>

{/* <select> 
    <option value="" selected="selected">Select</option> 
    <option value="/">Home</option> 
    <option value="/collections/all">About</option> 
    <option value="/blogs/five-simple-steps-blog">Blog</option> 
    <option value="/pages/about-us">About Us</option> 
    <option value="/pages/support">Support</option> 
  </select>*/ }

  
</nav></div>
  )
}

export default Navbar