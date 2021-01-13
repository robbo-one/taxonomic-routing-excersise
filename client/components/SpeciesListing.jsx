import React from 'react'
import { Link } from 'react-router-dom'

import { singularOf } from '../utilities'
import withSpecies from '../withSpecies'

export function SpeciesListing ({ species, match }) {
  const { rank, name } = match.params
  const matches = species.filter((type) => {
    return type[singularOf(rank)] === name
  })

  return (
    <div className='species-listing'>
      <h2>Species</h2>
      <ul>
        {matches.map((species, key) => {
          return <li key={key}><Link to={`/species/${species.id}`}>{species.name}</Link></li>
        })}
      </ul>
    </div>
  )
}

export default withSpecies(SpeciesListing)
