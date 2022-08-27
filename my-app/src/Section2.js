import React from 'react'
import {
  BsArrowRight,
  BsArrowLeft,
  BsArrowUp,
  BsArrowRightSquareFill,
  BsArrowLeftSquareFill,
  BsArrowUpSquareFill,
} from 'react-icons/bs'

export const Section2 = () => {
  return (
    <section className='section-2'>
      <div className='content2'>
        <h2>We are constantly creating new dishes inspired by local tastes.</h2>
        <p>
          Our restaurant is home to the best desserts, food and drinks.
          Delicious food with a unique ambiance in the heart of the city.
        </p>
        <div className='btns2'>
          <button className='section1-btn'>Check Menu</button>
          <button className='section2-btn2'>Reservations</button>
        </div>
      </div>
    </section>
  )
}

export const Section3 = () => {
  return (
    <section className='main2'>
      <section className='section-3'>
        <div className='content3'>
          <div className='head3'>
            <h3 id='food'>Food Menu</h3>
            <h3>Drinks</h3>
            <h3>Desserts</h3>
          </div>
          <p>
            Delicious and mouth-watering, savor a gourmet experience with a
            taste of Italy.
          </p>
          <button>
            <span>Learn more</span> <BsArrowRight />
          </button>
        </div>
      </section>
      <div className='overlay1'></div>
    </section>
  )
}
