import React from 'react'
import NavBar from './components/Header/NavBar'
import Footer from './components/Footer/Footer'

import MultiStepForm from './page/MultiStepForm'
import FormState from './components/context/FormState'
const App = () => {
  return (
    <FormState>
    <NavBar/>
    <MultiStepForm/>
    <Footer/>
    </FormState>
  )
}

export default App