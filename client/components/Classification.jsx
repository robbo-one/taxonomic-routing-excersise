import React from "react"
import { Link } from 'react-router-dom'
import ranks from "../../data/ranks";


const Classification = (props) => {
  const rank = props.match.params.rank
  const names = ranks[rank]
  console.log('in classification')

  return(
    

    <div>
      
      
    </div>
  )
}

export default Classification