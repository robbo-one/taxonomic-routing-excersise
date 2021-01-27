import React from "react";
import species from "../../data/species";
import { Link } from 'react-router-dom'

import { singularOf } from '../utils'

const SpeciesListing = (props) => {
  let fields = props.match.params.rank
  let name = props.match.params.name
  // console.log(props.obj[name])
  let test = species.find((specimen) => {
    return specimen[singularOf(fields)] == name
  })
  console.log(test)
return (
  <>
  <h2>Species</h2>
  <p>
    <strong>Family:</strong> 
    <Link to={`/families/${test.family}`}>{test.family}</Link>
  </p>
  <p>
    <strong>Kingdom:</strong> 
    <Link to={`/kingdoms/${test.kingdom}`}>{test.kingdom}</Link>
  </p>
  <img src={test.photo} alt=""/>
  {/* if species.rank == [props.obj.name] then return that object */}
  {/* <p>{props.obj}</p> */} 
 
  </>
  
)
}






export default SpeciesListing