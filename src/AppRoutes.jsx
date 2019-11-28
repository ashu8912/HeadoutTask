import React, { Component } from 'react'
import SideDrawer from './components/UI/SideDrawer/SideDrawer'

export default class AppRoutes extends Component {
  render() {
    return (
      <>
      <div>
        Header
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
