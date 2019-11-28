import React, { Component } from 'react'
import faker from "faker";
import * as linksUtil from "../../../utils/NavDummyLinks";
import NavItems from '../../NavItems/NavItems'
import NavItem from "../../NavItems/NavItem/NavItem";
import "./SideDrawer.css"
export default class SideDrawer extends Component {
  render() {
    return (
      <div className="SideDrawer">
      <div className="seperator">
        <NavItems links={linksUtil.generalLinks}/>
        </div>
        <div className="seperator">
        <NavItems links={linksUtil.auxiliaryLinks}/>
        </div>
        <div className="seperator">
        <h4 className="title">SUBSCRIPTIONS</h4>
        {Array.from({length:linksUtil.subscriptionsCount},(v,i)=>{
          return (<NavItem avatar={faker.image.avatar} name={faker.name.findName()}/>)
        })}
        </div>
        <NavItems links={linksUtil.moreFromYoutube}/>
       
      </div>
    )
  }
}
