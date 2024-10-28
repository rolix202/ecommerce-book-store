import React from 'react'

const ButtonComponent = ({ className, text }) => {
  return (
    <button className={`${className}`} >{text} </button>
  )
}

export default ButtonComponent