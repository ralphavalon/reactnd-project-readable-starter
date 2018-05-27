export const ADD_POST = 'ADD_POST'
export const ADD_COMMENT = 'ADD_COMMENT'

export function addComment (comment) {
    return {
      type: ADD_COMMENT,
      comment,
    }
  }