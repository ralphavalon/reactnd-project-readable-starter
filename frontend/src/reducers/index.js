import { combineReducers } from 'redux'
import * as types from '../actions'

const initialState = {
    categories: [{
        "name": "react",
        "number_of_posts": 26
    }]
}

const post = (state = {}, action) => {
    switch (action.type) {
        case types.ADD_POST:
            return {
                ...state,
                newValue: action.newValue
            };
        default:
            return state;
    }
}

const category = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    post, category
})