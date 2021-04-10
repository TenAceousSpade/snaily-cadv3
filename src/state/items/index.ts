import { combineReducers } from "redux";
import { AuthReducer } from "./auth/AuthReducer";
import { GlobalReducer } from "./global/GlobalReducer";
import { CitizenReducer } from "./citizen/CitizenReducer";
import { CallReducer } from "./calls/CallReducer";

export default combineReducers({
  auth: AuthReducer,
  global: GlobalReducer,
  citizen: CitizenReducer,
  calls: CallReducer,
});
