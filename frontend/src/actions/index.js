export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

const upvoteScore = ({ voteScore }) => ++voteScore;
const downvoteScore = ({ voteScore }) => --voteScore;

export function addComment(comment, postId) {
  comment.id = Math.random() * 1000;
  comment.timestamp = Number(new Date());
  comment.parentId = postId;
  comment.voteScore = 0;

  return {
    type: ADD_COMMENT,
    comment,
  }
}

export function addPost(post) {
  post.id = Number(new Date()).toString();
  post.timestamp = Number(new Date());
  post.voteScore = 0;
  post.deleted = false;
  post.commentCount = 0;

  return {
    type: ADD_POST,
    post,
  }
}

export function updateComment(comment) {
  return {
    type: UPDATE_COMMENT,
    comment,
  }
}

export function upvoteComment(comment) {
  comment.voteScore = upvoteScore(comment);
  return {
    type: UPDATE_COMMENT,
    comment,
  }
}

export function downvoteComment(comment) {
  comment.voteScore = downvoteScore(comment);
  return {
    type: UPDATE_COMMENT,
    comment,
  }
}

export function removeComment(comment) {
  return {
    type: REMOVE_COMMENT,
    comment,
  }
}

export function upvotePost(post) {
  post.voteScore = upvoteScore(post);
  return {
    type: UPDATE_POST,
    post,
  }
}

export function downvotePost(post) {
  post.voteScore = downvoteScore(post);
  return {
    type: UPDATE_POST,
    post,
  }
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    post,
  }
}

export function removePost(post) {
  return {
    type: REMOVE_POST,
    post,
  }
}