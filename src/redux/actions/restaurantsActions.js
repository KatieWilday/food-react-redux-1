export const fetchRestaurants = () => dispatch => {
  return fetch("http://localhost:3001/restaurants")
    .then(res => res.json())
    .then(restaurants =>
      dispatch({ type: "FETCH_RESTAURANTS_SUCCESS", payload: restaurants })
    )
}

export const fetchRandomRestaurant = restaurant => {
  return {
    type: "RANDOM_RESTAURANT_SUCCESS",
    payload: restaurant
  }
}

export const handleNoResults = () => {
  return {
    type: "NO_RESULTS"
  }
}

export const handleError = (errorCode, errorMsg) => {
  return {
    type: "ERROR",
    payload: [errorCode, errorMsg]
  }
}

export const updateRestaurant = restaurant => {
  return {
    type: "UPDATE_RESTAURANT_SUCCESS",
    restaurant: restaurant
  }
}

export const restaurantLikes = restaurant => {
  const URL = "http://localhost:3001/restaurants/" + restaurant.id
  const incrementedLikes = ++restaurant.likes
  const updatedRestaurant = { ...restaurant, likes: incrementedLikes }

  return dispatch => {
    fetch(URL, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        restaurant: updatedRestaurant
      })
    })
      .then(res => res.json())
      .then(restaurant => {
        dispatch(updateRestaurant(restaurant))
      })
  }
}
