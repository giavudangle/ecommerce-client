import React, { PureComponent } from "react"
import { RouteComponentProps, RouteProps } from "react-router"
import Banner from "./Banner"
import Footer from "./Footer";
import Header from "./Header"



export default function WithLayout(Component : () => JSX.Element) {
  const wrapped = Component();
  return function WithLayoutComponent(){
    return(
      <>
          <Header/>
          <Banner/>
          {wrapped}
          <Footer/>
      </>
    )
  }
}
