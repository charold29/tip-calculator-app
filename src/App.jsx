
import { useEffect, useState } from 'react';

//Logo
import logo from "./assets/images/logo.svg"

//Style
import './App.css'

//Components
import Display from './components/Display'
import Form from './components/Form'

const App = () => {
  const [bill, setBill] = useState(" ")
  const [tip, setTip] = useState("")
  const [people, setPeople] = useState(" ")
  const [calculatedTip, setCalculatedTip] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if(bill > 0 && people > 0 && tip > 0){
      setCalculatedTip(bill * (tip / 100) / people)
      setTotal(calculatedTip + (bill / people))
    }
  }, [bill, people, tip, calculatedTip])

  const handleResetBtn = () => {
    setBill("")
    setTip("")
    setPeople("")
    setCalculatedTip(0)
    setTotal(0)
  }

  return (
    <div className="wrapper">
      <img src={logo} alt='Splitter Logo'></img>
      <div className="container">
        <Form
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
         />
        <Display 
          total={total}
          calculatedTip={calculatedTip}
          handleResetBtn={handleResetBtn}
         />
      </div>
    </div>
  );
}

export default App
