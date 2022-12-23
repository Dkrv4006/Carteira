import { useState } from "react"
import {Container } from "./style"

import { NavLink } from "react-router-dom"


export const Aside = () => {

const [state, setState] = useState(false)
const toggle = () => {
  setState(!state)
}


  const data = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <i className="fa-solid fa-qrcode"></i>
    },
    {
      name: "Mortgage",
      link: "/mortgage",
      icon: <i className="fa-solid fa-wallet"></i>
    },
    {
      name: "cards",
      link: "/cards",
      icon: <i className="fa-sharp fa-solid fa-credit-card"></i>
    },
    {
      name: "History",
      link: "/history",
      icon: <i className="fa-solid fa-box-archive"></i>
    },
    {
      name: "Settings",
      link: "/",
      icon: <i className="fa-sharp fa-solid fa-gear"></i>
    },
  ]

  return (
    <Container className=" flex f-just">
    
        

        <div style={{width: state ? "200px" : "50px"}} className="sidebar">
          <div className="logo">
           <h2 > Daniel </h2>
           

          </div>

           <div onClick={toggle} className="button"><i className={state ? "fa-sharp fa-solid fa-angles-left" : "fa-sharp fa-solid fa-list" }></i></div>


          {data.map(({link,icon,name,index}) => {
            return(
            
              <NavLink to={link} key={index} className="link" activeclassName="active">
                <div className="icon">{icon}</div>
                <div style={{display: state ? "block" :" none"}} className="text">{name}
                
                </div>
                {/* <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div> */}
              </NavLink>

              

            )

          })}

        </div>
      
          
    </Container>
  )
}