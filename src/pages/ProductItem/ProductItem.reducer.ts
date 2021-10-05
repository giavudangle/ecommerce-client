import * as types from "./ProductItem.constants"
import produce from "immer"

const initialState = {
  loading: false
}

export const loginReducer = (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        return state
    }
  })
