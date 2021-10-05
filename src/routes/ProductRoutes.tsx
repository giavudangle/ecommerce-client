import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import { PATH } from "../constants/paths"
import Loading from "../components/Loading"
const ProductList = lazy(() => import("../pages/Product"))

export default function ProductRoutes() {
  return (
    <Switch>
        <Route 
        path={PATH.PRODUCT}
        exact>
            <Suspense fallback={<Loading />}>
                <ProductList />
            </Suspense>
        </Route>
      
      
    </Switch>
  )
}
