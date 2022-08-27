import logo from './logo.svg'
import './App.css'
import Navbar from './Navbar'
import { Section1 } from './Section1'
import { Section2, Section3 } from './Section2'
import { Section4, Section5, Section6, Section7 } from './Section4'
import { Section8, Section9 } from './section8'

function App() {
  return (
    <section className='app'>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
    </section>
  )
}

export default App
{
  /* <div className='App'>
<header className='App-header'>
  <img src={logo} className='App-logo' alt='logo' />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className='App-link'
    href='https://reactjs.org'
    target='_blank'
    rel='noopener noreferrer'
  >
    Learn React
  </a>
</header>
</div> */
}
