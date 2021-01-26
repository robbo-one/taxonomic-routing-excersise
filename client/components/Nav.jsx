import React from 'react'
import ranks from '../../data/ranks'

let rankList = Object.keys(ranks)


function Nav () {

  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {rankList.map(val=> {return <li>{val}</li>})}
      </ul>
    </div>
  )
}

export default Nav
