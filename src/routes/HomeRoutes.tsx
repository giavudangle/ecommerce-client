import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import { PATH } from "../constants/paths"
import Loading from "../components/Loading"
const Home = lazy(() => import("../pages/Home"))

export default function HomeRoutes() {
  return (
    <Switch>
        <Route 
        path={PATH.HOME}
        exact>
            <Suspense fallback={<Loading />}>
                <Home />
            </Suspense>
        </Route>
    </Switch>
  )
}
