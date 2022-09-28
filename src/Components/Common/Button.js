import React from 'react'

export const Button = ({title, wide, onClick}) => {
  return (
    <button style={wide?{width:'100%'}:{}} onClick={onClick}>
        {title}
    </button>
  )
}
