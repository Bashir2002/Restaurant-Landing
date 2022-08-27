import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { FaBehance, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'

const Navbar = () => {
  const [display, setDisplay] = useState(false)
  return (
    <>
      <nav>
        <div className='nav-center' id='nav-container'>
          <div></div>
          <div className='nav-header'>
            <h3>Deli Divine</h3>
            <button
              className='nav-toggle'
              onClick={() => {
                setDisplay(!display)
              }}
            >
              <FaBars />
            </button>
          </div>
          <div className={`links-container ${display && 'show-container'}`}>
            <GrClose className='close' onClick={() => setDisplay(!display)} />
            <ul className='links'>
              <h4>Deli Divine </h4>
              <li>
                <a href='#'>
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href='#'>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href='#'>
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
