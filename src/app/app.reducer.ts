import * as types from "./app.constants"
import produce from "immer"

const initialState = {
  isAuthenticated: false,
  closeSideBar: false
}

export const AppReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        return state
    }
  })
