import React from "react"
import { Router } from "react-router-dom"
import HomeRoutes from "./HomeRoutes"

import { useHistory } from "react-router"

const Routes = () => {
  return (
    <Router history={useHistory()}>
      <HomeRoutes />
    </Router>
  )
}

export default Routes
