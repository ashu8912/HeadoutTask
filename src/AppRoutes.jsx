import React, { Component } from 'react'
import youtubethumbnail from "youtube-thumbnail";
import SideDrawer from './components/UI/SideDrawer/SideDrawer'
import Header from './components/Header/header'
import DummyThumbnails from './utils/DummyThumbnails'
import VideoCards from './components/UI/VideoCards/VideoCards';

export default class AppRoutes extends Component {
  render() {
    return (
      <>
      <div>
      <div>
        <Header/>
        </div>
        <div className="flex-container">
        <SideDrawer/>
        <div>
          {DummyThumbnails.map((thumbnail)=>{
            return (<VideoCards thumbnail={youtubethumbnail(thumbnail).default.url}/>)
          })}
        </div>
        </div>
        </div>
      </>
    )
  }
}
