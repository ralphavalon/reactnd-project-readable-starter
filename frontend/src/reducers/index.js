import { combineReducers } from 'redux'
import * as types from '../actions'

const initialCategoryState = {
    categories: [{
        "name": "redux",
        "number_of_posts": 26
    },
    {
        "name": "react",
        "number_of_posts": 26
    },
    {
        "name": "udacity",
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

const initialPostState = {
    posts: [{
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2
    },{
        id: '8xf0y6ziyjabvozdd253nd2',
        timestamp: 1525631551545,
        title: 'Udacity is awesome',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'redux',
        voteScore: 4,
        deleted: false,
        commentCount: 0
    },{
        id: '8xf0y6ziyjabvozdd253nd3',
        timestamp: 1467166872644,
        title: 'I really love Udacity',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'udacity',
        voteScore: 2,
        deleted: false,
        commentCount: 2
    },{
        id: '8xf0y6ziyjabvozdd253nd4',
        timestamp: 1467166872944,
        title: 'I really love Udacity',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'udacity',
        voteScore: 2,
        deleted: false,
        commentCount: 2
    },{
        id: '8xf0y6ziyjabvozdd253nd5',
        timestamp: 1525631551505,
        title: 'I really love Udacity',
        body: 'Everyone says so after all.',
        author: 'thingone',
        category: 'udacity',
        voteScore: 1,
        deleted: false,
        commentCount: 2
    },{
        id: '8xf0y6ziyjabvozdd253n23',
        timestamp: 1525631552545,
        title: 'I really love Udacity',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'udacity',
        voteScore: 3,
        deleted: false,
        commentCount: 2
    },{
        id: '8xf0y6ziyjabvozdd253nd6',
        timestamp: 1467166872694,
        title: 'I really love Udacity',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'udacity',
        voteScore: 2,
        deleted: false,
        commentCount: 2
    },{
        id: '8xf0y6ziyjabvozdd253nd7',
        timestamp: 1467166878643,
        title: 'I really love Udacity',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'udacity',
        voteScore: 2,
        deleted: false,
        commentCount: 2
    },{
        id: '8xf0y6ziyjabvozdd253nd8',
        timestamp: 1467166882733,
        title: 'I really love Udacity',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'udacity',
        voteScore: 2,
        deleted: false,
        commentCount: 2
    },{
        id: '8xf0y6ziyjabvozdd253nd9',
        timestamp: 1467167872677,
        title: 'I really love Udacity',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'udacity',
        voteScore: 2,
        deleted: false,
        commentCount: 2
    }]
}

const post = (state = initialPostState, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
}

const comment = (state = initialCommentState, action) => {
    switch (action.type) {
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