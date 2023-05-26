import React from 'react'
import PropContent from './PropContent'
import Card from './Card'

function PropContainer() {
  return (
    <Card>
      <PropContent 
        heading="First Prop"
        content="This is the first thing being passed as a prop into PropContent.jsx"
      />
      <PropContent 
        heading="Second Prop"
        content="This is the second thing being passed as a prop into PropContent.jsx"
      />
    </Card>
  )
}

export default PropContainer