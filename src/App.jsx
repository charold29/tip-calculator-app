
import { useState } from 'react';

//Logo
import logo from "./assets/images/logo.svg"

//Style
import './App.css'

//Components
import Display from './components/Display'
import Form from './components/Form'

const App = () => {
  const [billAmt, setBillAmt] = useState(0)
  const [billShowAmtError, setShowBillAmtError] = useState(false)
  const [peeps, setPeeps] = useState(0)
  const [showPeepsError, setShowPeepsError] = useState(false)
  const [isTipSelected, setIsTipSelected] = useState(false)
  const [selectedTip, setSelectedTip] = useState(0)
  const [calculatedTip, setCalculatedTip] = useState(0)
  const [calculatedTotal, setCalculatedTotal] = useState(0)

  function calculateTip() {
    setCalculatedTip(billAmt * selectedTip / peeps)
    console.log(calculatedTip);
  }

  function handleBillAmtInput(e) {
    const input = e.target.value
    const pattern = /^[0-9]*$/ 
    
    if (pattern.test(input)) {
      setShowBillAmtError(false)
      setBillAmt(input)
      calculateTip()
    } else {
      setShowBillAmtError(true)
    }

  }

  function handleSelectedTip(e) {
    const selectedTip = e.target.value
    console.log(selectedTip);
    setSelectedTip(selectedTip)
  }

  function handlePeepsInput(e) {
    const input = e.target.value;
    const pattern = /^[0-9]*$/

    if (pattern.test(input)) {
      setShowPeepsError(false)
      setPeeps(input)
    } else {
      setShowPeepsError(true)
    }
  }

  return (
    <div className="wrapper">
      <img src={logo} alt='Splitter Logo'></img>
      <div className="container">
        <Form
          billAmt={billAmt} 
          handleBillAmtInput={handleBillAmtInput}
          handleSelectedTip={handleSelectedTip}
          billShowAmtError={billShowAmtError}
          handlePeepsInput={handlePeepsInput}
          peeps={peeps}
          showPeepsError={showPeepsError}
         />
        <Display />
      </div>
    </div>
  );
}

export default App
