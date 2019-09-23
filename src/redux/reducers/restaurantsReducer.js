const initialState = {
  restaurants: [],
  restaurant: {
    r_name: "",
    r_type: "",
    r_description: "",
    r_review: "",
    rating: "",
    likes: 0
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RESTAURANTS_SUCCESS":
      return {
        ...state,
        restaurants: action.payload
      }

    case "RANDOM_RESTAURANT_SUCCESS":
      return {
        ...state,
        restaurant: action.payload
      }
    case "UPDATE_RESTAURANT_SUCCESS":
      return {
        ...state,
        likes: action.likes
      }

    default:
      return state
  }
}
