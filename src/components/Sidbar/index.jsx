

import {  Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import { Container } from './style';

export function Sidbar() {
  const { collapseSidebar } = useProSidebar();

  return (
    <Container>

    <div style={{width:'80%', background: 'red'}}>
      
      <Sidebar style={{width:'100%', background: 'red'}}>
        <Menu>
          <MenuItem><i class="fa-solid fa-qrcode"></i> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem activeclassName="active"> E-commerce</MenuItem>
        </Menu>
        <button onClick={() => collapseSidebar()}>Collapse</button>
        <a activeclassName="active" >card</a>
      </Sidebar>
 
    </div>
    </Container>
  )
}