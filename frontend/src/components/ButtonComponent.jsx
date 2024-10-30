import React from 'react'

const ButtonComponent = ({ className, text, icon }) => {
  return (
    <button className={`${className}`}>{icon} {text} </button>
  )
}

export default ButtonComponent