import React from 'react'
import {Link} from 'react-router-dom'
import ranks from '../../data/ranks'
import species from '../../data/species'

function singular (rank){
  switch(rank){
    case 'kingdoms':
      return 'kingdom'
    case 'phyla':
      return 'phylum'
    case 'classes':
      return 'class'
    case 'orders':
      return 'order'
    case 'families':
      return 'family'
    case 'genera':
      return 'genus'
  }
}

function SpeciesListing(props){
  const rank = props.match.params.rank
  const name = props.match.params.name
  const cls = ranks[rank].find(cls => cls.name == name)
  
  const speciesList = species.filter(spec => {
    if (spec[singular(rank)] ==  cls.name) {
      return spec
    }
  })

  return (
    <>
      <h2>Species</h2>
      <ul>
        {speciesList.map(spec => {
          return (
            <li key={spec.id}>
              <Link to='#'>{spec.name}</Link>
            </li>
          )
        })}  
      </ul>
    </>
  )

}

export default SpeciesListing