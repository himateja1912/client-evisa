import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import React from 'react'

function Siderbar() {
  return (
    <div>
        <Sidebar style={{backgroundColor:"blue"}}>
            <Link to='/home' style={{fontSize:"20px",padding:"50px"}}>Online E-Visa</Link><br /><br />
  <Menu
    menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}
  >
    <MenuItem component={<Link to="/home" />}> Home</MenuItem>
    <MenuItem component={<Link to="/check" />}> Check Status</MenuItem>
    <MenuItem component={<Link to="/apply" />}> Apply</MenuItem>
    <MenuItem component={<Link to="/addusers" />}> Add users</MenuItem>
    <MenuItem component={<Link to="/show" />}> Applications</MenuItem>
    <MenuItem component={<Link to="/accepted" />}> Accepted Visa's</MenuItem>
  </Menu>
</Sidebar>;

    </div>
  )
}

export default Siderbar

