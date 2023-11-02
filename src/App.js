import React from 'react'
import NavBar from './components/Header/NavBar'
import Footer from './components/Footer/Footer'

import MultiStepForm from './page/MultiStepForm'
import FormState from './components/context/FormState'
import { FormProvider } from './components/context/FormContext'
const App = () => {
  return (
    <FormState>
      <FormProvider>
    <NavBar/>
    <MultiStepForm/>
    <Footer/>
      </FormProvider>
    </FormState>
  )
}

export default App