import React from 'react'
import { Route, Link } from 'react-router-dom'

import SpeciesListing from './SpeciesListing'

import { findByName } from '../utilities'
import withRanks from '../withRanks'

function Rank ({ ranks, match }) {
  const { rank, name } = match.params
  const classification = findByName(ranks[rank], name)

  return (
    <div className='rank-listing'>
      <h2>{name}</h2>
      <p>{classification.description}</p>
      <Link to={`${match.url}/species`}>Show species</Link>
      <Route path='/rank/:rank/:name/species' component={SpeciesListing} />
    </div>
  )
}

export default withRanks(Rank)
