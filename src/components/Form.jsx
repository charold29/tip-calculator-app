import { useEffect, useState } from "react"
import dollarIcon from "../assets/images/icon-dollar.svg"
import personIcon from "../assets/images/icon-person.svg"

const Form = ({bill, setBill, setTip, people, setPeople}) => {
  
  const [isCustomSelected, setIsCustomSelected] = useState(false)
  const [lang, setLang] = useState('document.documentElement.lang');

  const handleSelectedTip = (e) => {
    setTip(+e.target.value)
    setIsCustomSelected(true)
  }

  useEffect(() => {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
          setLang(mutation.target.lang);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, [])

  return (
    <div className="form">
      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="bill">Bill</label>
          <p className="error">{bill === '' ? "Can't be zero" : ""}</p>
        </div>
        <div className="number-wrapper">
          <input type="number" className={`number-input ${bill === '' ? 'number-error' : ''}`} id="bill" onInput={(e) => setBill(e.target.value)} value={bill} placeholder="0"/>
          <img src={ dollarIcon } aria-hidden="true" className="icon" />
        </div>
      </div>

      <div className="tip-section">
        <p className="label"> Selected Tip %</p>
        <div className="tip-amount-wrapper">
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip} id="input1" className="tip-input" name="tip" value="5"/>
            <label className="tip-btn" htmlFor="input1">5%</label>
          </div>
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip} id="input2" className="tip-input" name="tip" value="10"/>
            <label className="tip-btn" htmlFor="input2">10%</label>
          </div>
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip} id="input3" className="tip-input" name="tip" value="15"/>
            <label className="tip-btn" htmlFor="input3">15%</label>
          </div>
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip} id="input4" className="tip-input" name="tip" value="25"/>
            <label className="tip-btn" htmlFor="input4">25%</label>
          </div>
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip} id="input5" className="tip-input" name="tip" value="50"/>
            <label className="tip-btn" htmlFor="input5">50%</label>
          </div>
          <div className="custom-wrapper">
            <input type="number" onInput={handleSelectedTip} id="custom-input" className="number-input tip-custom" name="tip" placeholder="Custom" style={{'--placeholder-font-size': lang === 'es' ? '0.9rem' : '1.5rem'}}/>
            <label htmlFor="custom" className="tip-custom-label"></label>
          </div>  
        </div>
      </div>

      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="people">Number of People</label>
          <p className="error">{people === '' ? "Can't be zero" : ""}</p>
        </div>
        <div className="number-wrapper">
          <input type="number" className={`number-input ${ people === '' ? 'number-error' : ''}`} id="people" onInput={(e) => setPeople(e.target.value)} value={people} placeholder="0" />
          <img src={ personIcon } aria-hidden="true" className="icon" />
        </div>
      </div>
    </div>
  )
}

export default Form