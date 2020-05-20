import { combineReducers } from "redux";

import responsivenessReducer from "./responsivenessReducer";

const rootReducer = combineReducers({ responsiveness: responsivenessReducer });

export default rootReducer;
