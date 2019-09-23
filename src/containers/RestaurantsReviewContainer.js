import React from 'react'
import ReviewForm from '../components/ReviewForm'
import { connect } from 'react-redux'
import { fetchRestaurants } from '../redux/actions/restaurantsActions'

class RestaurantsRatingContainer extends React.Component {

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    render() {
      return(
        <div className="review-form-text">
         <ReviewForm />
       </div>
      )
    }
  }

    const mapStateToProps = state => {
      return {
        restaurants: state.restaurants
      }
    }


export default connect(mapStateToProps, { fetchRestaurants })(RestaurantsRatingContainer);
