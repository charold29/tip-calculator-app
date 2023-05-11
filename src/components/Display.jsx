const Display = ({calculatedTip, total, handleResetBtn}) => {

  const returnCurrencyAmt = (amt) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amt)
  }

  return (
    <div className='display'>
      <div className='display-group'>
        <div className='display-row'>
          <div className='display-label'>
            <p className='header'>Tip Amount&nbsp;</p>
            <p className='unit'>/ person</p>
          </div>
          <p className='display-amount'>{returnCurrencyAmt(`${calculatedTip ? calculatedTip : "0"}`)}</p>
        </div>
        <div className='display-row'>
          <div className='display-label'>
            <p className='header'>Total&nbsp;</p>
            <p className='unit'>/ person</p>
          </div>
          <div className='display-amount'>{returnCurrencyAmt(`${total ? total : "0"}`)}</div>
        </div>
      </div>
      {
        total ? (<button className='btn' onClick={handleResetBtn}>Reset</button>) : (<button className='btn' disabled>Reset</button>)
      }
    </div>
  )
}

export default Display