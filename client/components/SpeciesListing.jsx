import React from 'react'
import species from '../../data/species'

function SpeciesListing (props) {

  const name = props.match.params.name
  let rank = props.match.params.rank

  switch (rank){
    case 'kingdoms':
      rank = 'kingdom'
      break
    case 'phyla':
      rank = 'phylum'
      break
    case 'classes':
      rank = 'class'
      break
    case 'orders':
      rank = 'order'
      break
    case 'families':
      rank = 'family'
      break
    case 'genera':
      rank = 'genus'
      break
  }

  const findAllSpecies = species.filter(spec => {
     return spec[rank] == name
  })

  return (
    <div>
      <h2>Species Listing</h2>
      <p>Species</p>
      <ul>
        {findAllSpecies.map(species => {
          return(
            <li key={species.id}>
            {species.name}
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SpeciesListing
