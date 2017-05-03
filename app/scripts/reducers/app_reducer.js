export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      movies: null,
      userInfo: null,
      topics: null
    };
  }

  switch (action.type) {
    case "TEST_REDUCER":
      // DELETE OR CHANGE ME: I AM JUST AN EXAMPLE
      return Object.assign({}, state, { newData: action.data });

    case "USER_LOGGED_IN":
      return Object.assign({}, state, {
        userInfo: action.data
      });

    case "LOAD_NEW_MOVIES":
      return Object.assign({}, state, { movies: action.data });

    case "LOAD_TOPICS":
      return Object.assign({}, state, {
        topics: action.topics
      });
    // case "CREATE_TOPIC":
    // case "ADD_COMMENT":
  }

  console.log("Unhandled State!");
  return state;
}
