const initialState = {
  selectedFriendFacebookID: null,
  friends: []
}

const reducer = (state = initialState, action) => {
  const actions = {
    'SELECT_FRIEND': () => ({
      ...state,
      facebookID: action.facebookID
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
          id: 'asdasd'
          content: 1,
          sent: true
        }
      }
      */

      console.log('new messages:', [
        //...state.messages,
        action.message
      ]);

      return {
        ...state,
        messages: [
          ...state.messages,
          action.message
        ]
      };
    }
  };

  if (action.type in actions) return actions[action.type]();
  return state;
};

export default reducer;
