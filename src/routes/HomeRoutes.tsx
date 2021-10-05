import React, { lazy, Suspense } from "react"
import { Switch } from "react-router-dom"
import { PATH } from "../constants/paths"
import Loading from "../components/Loading/Loading"
const Home = lazy(() => import("../pages/Home/Home"))

export default function HomeRoutes() {
  return (
    <Switch>
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    </Switch>
  )
}
