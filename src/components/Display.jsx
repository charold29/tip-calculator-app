//styles
import './Display.css'

const Display = () => {
  return (
    <div className='display'>
      <div className='display-group'>
        <div className='display-row'>
          <div className='display-label'>
            <p className='header'>Tip Amount</p>
            <p className='unit'>/ person</p>
          </div>
          <div className='display-amount'>
            <p className='value'>$0.00</p>
          </div>
        </div>
        <div className='display-row'>
          <div className='display-label'>
            <p className='header'>Tip Amount</p>
            <p className='unit'>/ person</p>
          </div>
          <div className='display-amount'>0</div>
        </div>
      </div>
      <button className='btn' disabled>Reset</button>
    </div>
  )
}

export default Display