import React from 'react'
import ranks from '../../data/ranks'

const Individual = (props) => {
  const id = props.match.params.id;
  // let rank = props.match.params.rank
  // console.log(rank)

  const dude = ranks.props.match.params.rank[id].name
  console.log(dude)

// const individual = ranks.rank[id].name
// console.log(individual)
return (
  <>
  </>
)
}

export default Individual
