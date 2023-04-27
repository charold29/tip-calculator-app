import dollarIcon from "../assets/images/icon-dollar.svg"
import personIcon from "../assets/images/icon-person.svg"

const Form = () => {
  return (
    <div className="form">
      <div className="label-group">
        <label htmlFor="bill">Bill</label>
        <input type="number" id="bill" />
        <img src={ dollarIcon } aria-hidden="true" className="icon" />
      </div>

      <div className="label-group">
        <label htmlFor="people">People</label>
        <input type="number" id="people" />
        <img src={ personIcon } aria-hidden="true" className="icon" />
      </div>
    </div>
  )
}

export default Form