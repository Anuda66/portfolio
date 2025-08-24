import React from 'react'
import Navbar from './Components/Navbar'
import Cover from './Components/Cover'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Message from './Components/Message'
import Footer from './Components/Footer'
import Expiience from './Components/Expiience'

const App = () => {
  return (
    <div className='overflow-x-hidden '>
      <Navbar/>
      <Cover/>
      <Expiience/>
      <Education/>
      <Skills/>
      <Projects/>
      <Message/>
      <Footer/>
    </div>
  )
}

export default App