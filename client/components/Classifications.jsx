import React from "react"
import { Link } from 'react-router-dom'
import ranks from "../../data/ranks";


const Classifications = (props) => {
  const rank = props.match.params.rank
  const names = ranks[rank]
  console.log(rank)
  console.log(names)
  
  return(
    <div>
      <h1>{rank}</h1>
      <ul>
          {names.map(item => {return(
                <Link>
                  <li key={item.id}>
                    {item.name}
                  </li>
                </Link>   
              )
            }
          )}   
      </ul>
    </div>
  )
}


export default Classifications
 