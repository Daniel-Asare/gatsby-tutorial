import { Link } from 'gatsby'
import React from 'react'

const error = () => {
  return (
    <div>
      <h1>this is an error page</h1>
      <Link to='/'>Back to home Page</Link>
    </div>
  )
}

export default error
