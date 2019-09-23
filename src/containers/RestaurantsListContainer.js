import React, { Component } from "react"
// import Counter from '../components/Counter'
import { connect } from "react-redux"
import { fetchRestaurants } from "../redux/actions/restaurantsActions"
import RestaurantListItem from "../components/restaurant"
import "../App.css"

class RestaurantsContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchRestaurants()
  }

  render() {
    if (this.props.restaurants.length === 0) {
      return <h1>Loading...</h1>
    }

    return (
      <div className="list-style">
        <ul className="list-style-list">
          {this.props.restaurants.map(restaurant => (
            <RestaurantListItem
              key={restaurant.r_id}
              likes={restaurant.likes}
              restaurant={restaurant}
            />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants.restaurants
  }
}

export default connect(
  mapStateToProps,
  { fetchRestaurants }
)(RestaurantsContainer)
