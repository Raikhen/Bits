const initialState = {
  selectedFriendFacebookID: null,
  friends: []
}

const reducer = (state = initialState, action) => {
  const actions = {
    'SELECT_FRIEND': () => ({
      ...state,
      selectedFriendFacebookID: action.facebookID
    }),
    'ADD_FRIENDS': () => ({
      ...state,
      friends: [
        ...state.friends,
        ...action.friends
      ]
    }),
    'ADD_MESSAGE': () => {
      /*
      action: {
        type: 'ADD_MESSAGE',
        message: {
          content: 1,
          sent: true,
          facebookID: ''
        }
      }
      */

      let newState = { ...state };

      /*
      let friend = newState.friends.filter((friend) => {
        return friend.facebookID == action.facebookID
      })[0];

      friend.messages.push();
      */

      return newState;
    }
  };

  if (action.type in actions) return actions[action.type]();
  return state;
};

export default reducer;
