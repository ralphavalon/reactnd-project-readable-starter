import { combineReducers } from 'redux'
import * as types from '../actions'

const initialCategoryState = {
    categories: [{
        "name": "react",
        "number_of_posts": 26
    }]
}

const initialCommentState = {
    comments: [{
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false
    }, {
        id: '8tu4bsun805n8un48ve89',
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false
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

const category = (state = initialCategoryState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const comment = (state = initialCommentState, action) => {
    switch (action.type) {
        case types.ADD_COMMENT:
            const { comment } = action;
            comment.id = Math.random() * 1000;
            comment.timestamp = Number(new Date());
            comment.parentId = "8xf0y6ziyjabvozdd253nd";
            comment.voteScore = 0;
            
            return {
                ...state,
                'comments': state.comments.filter((c) => c.id !== comment.id).concat([comment])
            }
        default:
            return state;
    }
}

export default combineReducers({
    post, category, comment
})