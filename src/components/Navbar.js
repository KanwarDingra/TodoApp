import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar'>
       <Link className='link'  to="/"><li>Home</li></Link>
       <Link className='link'  to="/about"><li>About</li></Link>
       <Link className='link' to="/contact"><li>Contact</li></Link>
    </div>
  )
}
