import { combineReducers } from "@reduxjs/toolkit";
import ActiveCall from "./ActiveCall";
import currentUser from "./currentUser";

export default combineReducers({
  ActiveCall,
  currentUser,
});
