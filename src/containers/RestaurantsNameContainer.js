import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRestaurants, fetchRandomRestaurant } from '../redux/actions/restaurantsActions'
import { getRandom } from '../components/RandomRestaurant'

class RestaurantsNameContainer extends Component {

    state = {
        restaurants: []
    }

    componentDidMount() {
        this.props.fetchRestaurants()
    }

    fetchNameOnClick = (e) => {
        e.preventDefault()
        let item = getRandom(this.props.state.restaurants)
        this.props.fetchRandomRestaurant(item)
    }

    render() {
        return (
            <div className = 'sh-container'>
                    <div className = 'sh-header'>

                        <h1>Let Us Choose by Name!</h1>
                    </div>
                    <div className = 'sh-body'>
                        <h2>{this.props.state.restaurant.r_name}</h2>
                        <button onClick={e => this.fetchNameOnClick(e)}>Restaurant By Name</button>
                      <div className = 'sh-info'>
                          <strong><p>Type:</p></strong>
                          <p>{this.props.state.restaurant.r_type}</p>
                          <strong><p>Description:</p></strong>
                          <p>{this.props.state.restaurant.r_description}</p>
                          <strong><p>Review:</p></strong>
                          <p>{this.props.state.restaurant.r_review}</p>
                          <strong><p>Rating(1-5):</p></strong>
                          <p>{this.props.state.restaurant.rating}</p>
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

export default connect(mapStateToProps, { fetchRestaurants, fetchRandomRestaurant })(RestaurantsNameContainer)
