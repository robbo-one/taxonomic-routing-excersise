import React from 'react'

import ranks from '../../data/ranks'


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
    </div>
  )
  
}

export default Description