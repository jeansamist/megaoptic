import React from 'react'

export function Button({ label = 'button', largeBtn = false }) {
  return (
    <button className={"btn " + (largeBtn ? "btn-large " : '')}>{label}</button>
  )
}
