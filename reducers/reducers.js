import { combineReducers } from 'redux'
import { ADD_CAKE } from '../actions/actions'

function cake(state, action) {
   switch (action.type) {
      case ADD_CAKE:
         return {
            id: action.id,
            name: action.name,
            comment: action.comment,
            imageUrl: action.imageUrl,
            yumFactor: action.yumFactor
         }
      default:
         return state
   }
}

function cakes(state = [], action) {
   switch (action.type) {
      case ADD_CAKE:
         return [
            ...state,
            cake(undefined, action)
         ]
      default:
         return state
   }
}

const cakeApp = combineReducers({
   cakes
})

export default cakeApp

