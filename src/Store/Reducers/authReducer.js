const initialState = {
  isModalOpen: false,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_AUTH_STATE":
      return {
        ...state,
        isAuth: !state.isAuth,
        isModalOpen: state.isAuth ? state.isModalOpen : false,
      };

    case "OPEN_LOG_MODAL":
      return {
        ...state,
        isModalOpen: true,
      };

    case "CLOSE_LOG_MODAL":
      return {
        ...state,
        isModalOpen: false,
      };

    default:
      return state;
  }
};
