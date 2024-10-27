import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className='fixed w-full z-0 top-0 left-0 '>
        <ul className='max-w-[90vw] flex flex-wrap justify-between mx-auto'>
            <a href="">Hablu programmer</a>
            <div className='flex [&>li]:pl-8'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="About">About</Link></li>
                <li><Link to="Contact">Contact</Link></li>
                <li><Link to="Signup">Signup</Link></li>
            </div>

        </ul>
    </nav>
    </>
  )
}

export default Navbar