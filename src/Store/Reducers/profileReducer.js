const inicialState = {
  profileInfo: null,
  profileType: null,
};

export const profileReducer = (state = inicialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return {
        ...state,
        profileInfo: action.payload?.userProfile,
        profileType: action.payload?.profileType,
      };

    case "CLEAR_PROFILE":
      return {
        ...state,
        profileInfo: null,
        profileType: null,
      };

    default:
      return state;
  }
};
