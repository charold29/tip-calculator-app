//styles
import './Display.css'

const Display = () => {
  return (
    <div className='display-row'>
      <div className='display-label'>
        <p className='header'>Tip Amount</p>
        <p className='unit'>/ person</p>
      </div>
      <div className='display-amount'>
        <p className='value'>$0.00</p>
      </div>
      <button className='btn'>Reset</button>
    </div>
  )
}

export default Display