import React from "react";
import "./NavItem.css"
function NavItem(props){
  let avatar;
 
  if(props.avatar)
  {
    avatar=  <div className="inline-block avatar"><img src={props.avatar()}/></div>
  }else{
    avatar=<div className="inline-block icon"><i className={props.icon}></i></div>
  }
  return (<li>
           {avatar}
           <div className="inline-block link">{props.name}</div>
          </li>)
}
export default NavItem;