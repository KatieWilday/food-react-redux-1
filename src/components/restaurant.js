import React from "react"
import { restaurantLikes } from "../redux/actions/restaurantsActions"
import { connect } from "react-redux"

class RestaurantListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: props.likes
    }
    this.handleLikes = this.handleLikes.bind(this)
  }

  handleLikes = e => {
    e.preventDefault()
    console.log(this.props.restaurant)
    this.setState({
      likes: this.state.likes + 1
    })
    this.props.restaurantLikes(this.props.restaurant)
  }

  render() {
    const likes = this.state.likes
    const name = this.props.restaurant.r_name
    return (
      <li key={this.props.restaurant.r_id}>
        {name} <input type="button" value="Likes" onClick={this.handleLikes} />{" "}
        {likes}
      </li>
    )
  }
}

const mapStateToProps = restaurant => restaurant

export default connect(
  mapStateToProps,
  { restaurantLikes }
)(RestaurantListItem)
