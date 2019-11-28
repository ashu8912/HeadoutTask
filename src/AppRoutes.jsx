import React, { Component } from 'react'
import youtubethumbnail from "youtube-thumbnail";
import SideDrawer from './components/UI/SideDrawer/SideDrawer'
import Header from './components/Header/header'
import Videos from './utils/Videos'
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
        <div className="video_container">
          {Videos.map((video)=>{
            return (<VideoCards video={video}/>)
          })}
        </div>
        </div>
        </div>
      </>
    )
  }
}
