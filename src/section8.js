import React from 'react'
import { BsArrowUp, BsArrowRightSquareFill } from 'react-icons/bs'

export const Section8 = () => {
  return (
    <section className='section-8'>
      <div className='news'>
        <h3>Subscribe to our newsletter</h3>
        <p>To get the latest news from us</p>
        <div className='input'>
          <input type='text' name='email' placeholder='email' id='' />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  )
}

export const Section9 = () => {
  return (
    <section className='section-9' id='nav-contain'>
      <div>
        <h3>Deli Divine</h3>
      </div>
      <div>
        <h4>123 Market St. #22B Charlottesville, California 44635</h4>
        <p id='tel'>(+234) 814-1800276 </p>
        <p id='tel'>contact@delidivine.restaurant</p>
      </div>
      <div>
        <div className='linked'>
          <ul>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Cuisines</a>
            </li>
            <li>
              <a href='#'>Chefs</a>
            </li>
            <li>
              <a href='#'>Reservations</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#'>Facebook</a>
            </li>
            <li>
              <a href='#'>Twitter</a>
            </li>
            <li>
              <a href='#'>Linkedin</a>
            </li>
            <li>
              <a href='#'>Instagram</a>
            </li>
          </ul>
        </div>
        <p id='copy'>© 2022 Faheez Lawal. All rights reserved.</p>
      </div>
      <div className='arrow'>
        <span>
          <a href='#nav-container'>
            <BsArrowUp />
          </a>
        </span>
      </div>
    </section>
  )
}
