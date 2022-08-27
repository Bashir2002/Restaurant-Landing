import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { FaBehance, FaFacebook, FaLinkedin } from 'react-icons/fa'
// BsArrowRight,BsArrowLeft,BsArrowUp,BsArrowRightSquareFill,BsArrowLeftSquareFill,BsArrowUpSquareFill

export const Section1 = () => {
  return (
    <section className='main-1'>
      <section className='section-1'>
        {/* <div className='overlay1'></div> */}
        <div className='content1'>
          <h1>Find the best cuisine on Deli divine.</h1>
          <p>
            Deli divine is the home of the finest and delicious food from the
            famous Indian, Lebanese and Middle East cuisines.{' '}
          </p>
          <button className='section1-btn'>Check Menu</button>
        </div>
      </section>
      <div className='overlay1'></div>
    </section>
  )
}
