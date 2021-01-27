import React from 'react'
// import { Link } from 'react-router-dom'
import ranks from '../../data/ranks'

function Description (props) {
  const data = props.match.params.ranks
  const name = props.match.params.name
  console.log(name)
  return (
    <div>
     
        {
          ranks[data].map(des => {
            if(des.name == name) {
            return (
              <>
              <h2>{des.name}</h2>
              <p>
                {des.description}
              </p>
              </>
            )}
          })
        }
    </div>
  )
}

export default Description

{/* <Link to={`/${data}/${rank.name}`}>{rank.name}</Link> */}