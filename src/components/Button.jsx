import React from 'react'
import '../css/Button.css'

function Button(props) {
  return (
    <button
      onClick={() => {
        props.setMood(props.mood);
        props.setHistory(prev => [...prev, props.mood]);
        props.setCount(prev => ({
          ...prev,
          [props.name]: prev[props.name] + 1
        }))
      }}
    >
      {props.mood}
    </button>
  )
}

export default Button

