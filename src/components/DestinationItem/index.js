// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {id, name, imgUrl} = destinationItem
  return (
    <li className="li-container">
      <img className="img-item" src={imgUrl} alt={name} />
      <div>
        <p className="li-para">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
