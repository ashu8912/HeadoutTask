import React from "react"

import NavItem from "./NavItem/NavItem";
import "./NavItems.css"


function NavItems(props){
    return (<ul>
            {props.links.map((link)=>{
              return (<NavItem icon={link.icon} name={link.name}/>)
            })}
            
          </ul>)
}

export default NavItems;