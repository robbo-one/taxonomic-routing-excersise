import React from 'react'
import { Link } from 'react-router-dom'
import species from '../../data/species'

function speciesListing (props) {
  const name = props.match.params.species
  return (
    <>
      <div>
        {
      species[name].map(c => {
        return (
          <>
          <Link to={`/${name}/${c.name}`}>{c.name}</Link>
          </>
        )
      })
    }
      </div>
    </>
  )

}

export default speciesListing