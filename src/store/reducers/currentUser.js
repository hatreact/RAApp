import { SET_CURRENT_USER, RESET_CURRENT_USER } from "../actions/currentUser";

export default (currentUser = null, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      console.log("[SET_CURRENT_USER]", action);
      return action.currentUser;

    case RESET_CURRENT_USER:
      return null;

    default:
      return currentUser;
  }
};
