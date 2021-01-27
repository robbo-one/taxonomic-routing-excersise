import React from 'react'
import speciesData from '../../data/species'
import { Link } from 'react-router-dom'
import { singularOf } from '../utilties'

function species (props) {
  const classification = props.match.params.classification 
  console.log(classification)
  const rank = props.match.params.rank 
  console.log(singularOf(rank))  

  const specy = speciesData.find(spec => spec[singularOf(rank)] === classification)
  console.log(specy)
  return(
    <>
      <h2>Species</h2>
      
      <ul>
       <li> 
         {specy.name}
      </li>
      <br></br>
      <li>
        {specy.description}
      </li>
      <li>
        <img src={`${specy.photo}`} alt={`${specy.name}`}></img>
      </li>
      <br></br>
      <li>
        {specy.kingdom}
      </li>
      <br></br>
      <li>
        {specy.phylum}
      </li>
      <br></br>
      <li>
        {specy.class}
      </li>
      <br></br>
      <li>
        {specy.order}
      </li>
      <br></br>
      <li>
        {specy.family}
      </li>
      <br></br>
      <li>
        {specy.genus}
      </li>
      </ul>
    </>
  )
}

export default species

 {/* {newSpecies.map(specie => {
          return (
            <li key={specie.id}>
              <Link to={`/rank/species/${specy}/${specie.name}`}>{specie.name}</Link>
              <br></br>
              {specie.name}
              <br></br>
              {specie.description}
            </li>

          )
        })} 
      */}
      
{/* 
  speciesData.map(specy => {
    console.log(specy[singularOf(rank)])
    if(specy[singularOf(rank)] === classification){
      arr.push(specy)
    }
  }}
*/}