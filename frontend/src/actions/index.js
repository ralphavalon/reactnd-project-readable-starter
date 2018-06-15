import * as ReadableAPI from '../utils/ReadableAPI';

export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const SET_POSTS = 'SET_POSTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const SET_COMMENTS = 'SET_COMMENTS'
export const SET_CATEGORIES = 'SET_CATEGORIES'

export function addCommentAction(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}

export function addPostAction(post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function updateCommentAction(comment) {
  return {
    type: UPDATE_COMMENT,
    comment,
  }
}

export function upvoteCommentAction(comment) {
  return {
    type: UPDATE_COMMENT,
    comment,
  }
}

export function downvoteCommentAction(comment) {
  return {
    type: UPDATE_COMMENT,
    comment,
  }
}

export function removeCommentAction(comment) {
  return {
    type: REMOVE_COMMENT,
    comment,
  }
}

export function setComments(comments) {
  return {
    type: SET_COMMENTS,
    comments,
  }
}

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    categories,
  }
}

export function upvotePostAction(post) {
  return {
    type: UPDATE_POST,
    post,
  }
}

export function downvotePostAction(post) {
  return {
    type: UPDATE_POST,
    post,
  }
}

export function updatePostAction(post) {
  return {
    type: UPDATE_POST,
    post,
  }
}

export function removePostAction(post) {
  return {
    type: REMOVE_POST,
    post,
  }
}

export function setPosts(posts) {
  return {
    type: SET_POSTS,
    posts,
  }
}

export function loadInitialData() {
  return dispatch => {
    ReadableAPI.getPosts()
      .then(posts => {
        ReadableAPI.getCategories()
          .then(categories => {
            dispatch(setCategories(categories));
            dispatch(setPosts(posts));
          })
      })
  }
};

export function loadCategories() {
  return dispatch => {
    ReadableAPI.getCategories()
      .then(categories => {
        dispatch(setCategories(categories));
      })
  }
};

export function addPost(post) {
  post.id = Number(new Date()).toString();
  post.timestamp = Number(new Date());

  return dispatch => {
    ReadableAPI.addPost(post)
      .then(post => {
        dispatch(addPostAction(post));
      })
  }
};

export function getPost(postId) {
  return dispatch => {
    ReadableAPI.getPostDetails(postId)
      .then(post => {
        dispatch(updatePostAction(post));
      })
  }
};

export function updatePost(post) {
  return dispatch => {
    ReadableAPI.editPost(post)
      .then(post => {
        dispatch(updatePostAction(post));
      })
  }
};

export function upvotePost(post) {
  return dispatch => {
    ReadableAPI.votePost(post, 'upVote')
      .then(post => {
        dispatch(upvotePostAction(post));
      })
  }
}

export function downvotePost(post) {
  return dispatch => {
    ReadableAPI.votePost(post, 'downVote')
      .then(post => {
        dispatch(downvotePostAction(post));
      })
  }
}

export function removePost(post) {
  return dispatch => {
    ReadableAPI.deletePost(post.id)
      .then(post => {
        dispatch(removePostAction(post));
      })
  }
};

export function addComment(comment, postId) {
  comment.id = Math.random() * 1000;
  comment.timestamp = Number(new Date());
  comment.parentId = postId;

  return dispatch => {
    ReadableAPI.addComment(comment)
      .then(comment => {
        dispatch(addCommentAction(comment));
        ReadableAPI.getPostDetails(postId)
          .then(post => {
            dispatch(updatePostAction(post));
          })
      })
  }
};

export function getComments(postId) {
  return dispatch => {
    ReadableAPI.getPostComments(postId)
      .then(comments => {
        dispatch(setComments(comments));
      })
  }
};

export function updateComment(comment) {
  return dispatch => {
    ReadableAPI.editComment(comment)
      .then(comment => {
        dispatch(updateCommentAction(comment));
      })
  }
};

export function removeComment(comment) {
  return dispatch => {
    ReadableAPI.deleteComment(comment.id)
      .then(comment => {
        dispatch(removeCommentAction(comment));
      })
  }
};

export function upvoteComment(comment) {
  return dispatch => {
    ReadableAPI.voteComment(comment, 'upVote')
      .then(comment => {
        dispatch(upvoteCommentAction(comment));
      })
  }
}

export function downvoteComment(comment) {
  return dispatch => {
    ReadableAPI.voteComment(comment, 'downVote')
      .then(comment => {
        dispatch(downvoteCommentAction(comment));
      })
  }
}