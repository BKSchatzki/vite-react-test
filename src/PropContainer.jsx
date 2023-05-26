import React from 'react'
import PropContent from './PropContent'

function PropContainer() {
  return (
    <div>
      <PropContent 
        heading="First Prop"
        content="This is the first thing being passed as a prop into PropContent.jsx"
      />
            <PropContent 
        heading="Second Prop"
        content="This is the second thing being passed as a prop into PropContent.jsx"
      />
    </div>
  )
}

export default PropContainer