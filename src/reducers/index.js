import { combineReducers } from "redux";
import posts from "./posts.js";
import auth from "./Auth.js";
import conversations from "./convo.js";
import msg from "./msg.js";
export default combineReducers({ posts, auth, conversations, msg });
