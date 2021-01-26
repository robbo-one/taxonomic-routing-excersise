import React from 'react'
import rankData from '../../data/ranks'

function classifications (props) {
  const rank = props.match.params.classification
  console.log(rankData[rank])
  return (
    <>
    <h3>Classifications!</h3>
    </>
  )
}

export default classifications