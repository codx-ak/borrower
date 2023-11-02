import React from "react";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import MultiStepForm from "./page/MultiStepForm";
import { FormProvider } from "./components/context/FormContext";
const App = () => {
  return (
    <FormProvider>
      <NavBar />
      <MultiStepForm />
      <Footer />
    </FormProvider>
  );
};

export default App;
