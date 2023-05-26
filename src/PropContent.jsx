import React from 'react'

function PropContent({
  heading,
  content
}) {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{content}</p>
    </div>
  )
}

export default PropContent