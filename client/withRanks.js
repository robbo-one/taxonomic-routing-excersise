import React from 'react'

import ranks from '../data/ranks'

function withRanks (Component) {
  return function WithRanks (props) {
    return (
      <Component
        ranks={ranks}
        {...props}
      />
    )
  }
}

export default withRanks
