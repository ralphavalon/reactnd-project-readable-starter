import { combineReducers } from 'redux'
import * as types from '../actions/types'

const initialCategoryState = {
    categories: []
}

const initialCommentState = {
    comments: []
}

const initialPostState = {
    posts: []
}

const post = (state = initialPostState, action) => {
    switch (action.type) {
        case types.SET_POSTS:
            return {
                ...state,
                posts: action.posts
            };
        case types.ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.post]
            };
        case types.UPDATE_POST:
            return {
                ...state,
                posts: state.posts.filter((p) => p.id !== action.post.id).concat([action.post])
            }
        case types.REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter((p) => p.id !== action.post.id)
            }
        default:
            return state;
    }
}

const category = (state = initialCategoryState, action) => {
    switch (action.type) {
        case types.SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            };
        default:
            return state;
    }
}

const comment = (state = initialCommentState, action) => {
    switch (action.type) {
        case types.SET_COMMENTS:
            return {
                ...state,
                comments: action.comments
            };
        case types.ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.comment]
            }
        case types.UPDATE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter((c) => c.id !== action.comment.id).concat([action.comment])
            }
        case types.REMOVE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter((c) => c.id !== action.comment.id)
            }
        default:
            return state;
    }
}

export default combineReducers({
    post, category, comment
})