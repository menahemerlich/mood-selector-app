import React from 'react'

function Reset(props) {
  return (
    <button
      onClick={() => {
        props.setMood('Neutral 😐');
        props.setHistory(['', 'Neutral 😐']);
        props.setCount({
          heppy: 0,
          sad: 0,
          angry: 0
        })
      }}
    >
      Reset
    </button>
  )
}

export default Reset
