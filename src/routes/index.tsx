import React from "react"
import { BrowserRouter, Router } from "react-router-dom"
import HomeRoutes from "./HomeRoutes"
import ProductRoutes from "./ProductRoutes"

import useHistory from "../utils/useHistory"


const Routes = () => {
  return (
    <Router history={useHistory}>
      <HomeRoutes />
      <ProductRoutes/>
    </Router>
  )
}

export default Routes
