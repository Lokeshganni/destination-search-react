// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  takingInput = event => {
    this.setState({searchInput: event.target.value.toLowerCase()})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const filterDestinationList = destinationsList.filter(each => {
      const text = each.name.toLowerCase()
      return text.includes(searchInput)
    })

    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            onChange={this.takingInput}
            type="search"
            placeholder="search"
            className="search-input-bar"
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-img"
          />
        </div>

        <ul className="ul-container">
          {filterDestinationList.map(each => (
            <DestinationItem destinationItem={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
