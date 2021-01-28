import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
  const recentItem = (topics) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topics}</p>
    </div>
  )

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=100&q=80'
          alt=''
        />
        <Avatar className='sidebar__avatar' />
        <h2>Jamshed Fayziev</h2>
        <h4>fjamshed08@gmail.com</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar_statNumber'>2,543</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post </p>
          <p className='sidebar_statNumber'>2,448</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('Softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  )
}

export default Sidebar
