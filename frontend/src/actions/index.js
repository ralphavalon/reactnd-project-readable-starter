export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

const upvoteScore = ({ voteScore }) => ++voteScore;
const downvoteScore = ({ voteScore }) => --voteScore;

export function addComment(comment) {
  comment.id = Math.random() * 1000;
  comment.timestamp = Number(new Date());
  comment.parentId = "8xf0y6ziyjabvozdd253nd";
  comment.voteScore = 0;

  return {
    type: ADD_COMMENT,
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