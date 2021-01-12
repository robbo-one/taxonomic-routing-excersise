import React from 'react'

import species from '../data/species'

function withSpecies (Component) {
  return function WithSpecies (props) {
    return (
      <Component
        species={species}
        {...props}
      />
    )
  }
}

export default withSpecies
