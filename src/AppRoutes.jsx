import React, { Component } from 'react'
import SideDrawer from './components/UI/SideDrawer/SideDrawer'
import Header from './components/Header/header'

export default class AppRoutes extends Component {
  render() {
    return (
      <>
      <div>
        <Header/>
        </div>
        <div className="flex-container">
        <SideDrawer/>
        <div>
        Container
        </div>
        </div>
      </>
    )
  }
}
