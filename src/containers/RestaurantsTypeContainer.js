import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRestaurants, fetchRandomRestaurant } from '../redux/actions/restaurantsActions'
import { getRandom } from '../components/RandomRestaurant'

class RestaurantsTypeContainer extends Component {

    componentDidMount() {
        this.props.fetchRestaurants()
    }

    fetchTypeOnClick=(e) => {
        e.preventDefault()
        let item = getRandom(this.props.state.restaurants)
        this.props.fetchRandomRestaurant(item)
        this.filterRestaurant()
    }

    filterRestaurant = () => {
      let filteredRestaurant = this.props.state.restaurants.filter( restaurant => restaurant.r_type === this.props.state.restaurant.r_type )
      let restaurantNames = filteredRestaurant.map(r => r.r_name)
      let restaurantHTML = "<h2>" + restaurantNames.join("</h2><h2>") + "</h2>"
      document.getElementById("random-type").innerHTML = restaurantHTML
    }

    render() {
        return (
            <div className = 'sh-container'>
                    <div className = 'sh-header'>

                        <h1>Let us decide what you're craving!</h1>
                    </div>
                    <div className = 'sh-body'>
                        <h1>{this.props.state.restaurant.r_type}</h1>
                          <button onClick={e => this.fetchTypeOnClick(e)}>Restaurant By Type</button>
                          <div id="random-type">

                          </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.restaurants
    }
}

export default connect(mapStateToProps, { fetchRestaurants, fetchRandomRestaurant })(RestaurantsTypeContainer)
