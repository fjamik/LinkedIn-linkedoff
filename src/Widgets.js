import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets_articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>Lenked News</h2>
        <InfoIcon className='widgets__icon' />
      </div>
      {newsArticle('Tesla hits new highs', 'Cars & auto - 300 readers')}
      {newsArticle('Bitcoins Breaks $22k', 'Crypto - 8000 readers')}
    </div>
  )
}

export default Widgets
