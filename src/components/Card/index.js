import React from 'react'
import Icon from '../Icon'


function Card({ item }) {
  return (
    <div className='d-flex'>
      <Icon src={item.icon} classes="img-round right-icon"></Icon>
      <div>{item.name}</div>
    </div>
  )
}

export default Card