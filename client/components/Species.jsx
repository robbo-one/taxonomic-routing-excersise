import React from 'react'
import species from '../../data/species'
import { Link } from 'react-router-dom'
import Ranks from '../../data/ranks'

function Species (props){
const id = props.match.params.id
const spec = species.find(spec => spec.id == id)

return(
<div>
<h2>{spec.name}</h2>
<p>{spec.description}</p>
<img src={spec.photo} alt={`Picture of ${spec.name}`} />
<ul>
  <li>
    Kingdom: <Link to={`/rank/kingdoms/${spec.kingdom}`}>{spec.kingdom}</Link>
  </li>
  <li>
    Phylum: <Link to={`/rank/phyla/${spec.phylum}`}> {spec.phylum}
    </Link>
  </li>
  <li>
    Class: <Link to={`/rank/classes/${spec.class}`}> {spec.class}</Link>
  </li>
  <li>
    Order: <Link to={`/rank/orders/${spec.order}`}>{spec.order}</Link>
  </li>
  <li>
    Family: <Link to={`/rank/families/${spec.family}`}>{spec.family}</Link>
  </li>
  <li>
    Genus: <Link to={`/rank/genera/${spec.genus}`}>{spec.genus}</Link>
  </li>
</ul>


</div>


)

}

export default Species