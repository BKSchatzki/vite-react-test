import React from 'react'

const today = new Date()

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

function DayOfWeek() {
  return (
    <span style={{
      background: 'linear-gradient(90deg, #00b0ff 0%, #00ffab 100%)',
      borderRadius: '5px',
      display: 'block',
      marginBottom: '2rem',
      padding: '0.5rem 1rem'
    }}>
      Today is <strong>{formatDate(today)}</strong>
    </span>
  )
}

export default DayOfWeek;