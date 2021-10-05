import { combineReducers } from "redux"
import { AppReducer } from "../app/app.reducer"

const rootReducer = combineReducers({
  appReducer: AppReducer
})

export default rootReducer
