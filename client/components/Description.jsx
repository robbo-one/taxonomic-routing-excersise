import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import {Link} from 'react-router-dom'
import ranks from '../../data/ranks'
import SpeciesListing from './SpeciesListing'


function Description(props) {
  const rank = props.match.params.rank
  const name = props.match.params.name

  const cls = ranks[rank].find(cls => cls.name == name)

  return (
    <div>
      <h2>{cls.name}</h2>

      <p>
        {cls.description}
      </p>
      <Link to={`${props.match.url}/species`}>Show species</Link>
      <Router>
      <Route path="/rank/:rank/:name/species" component={SpeciesListing} />
      </Router>

    </div>
  )
  
}

export default Description