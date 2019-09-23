import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import restaurants from './reducers/restaurantsReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  restaurants
})

export default createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
  ));
