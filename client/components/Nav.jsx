import React from 'react'
import ranks from '../../data/ranks'
import{Link} from 'react-router-dom'

function capitals (word) {
  console.log(word[0])
  let firstLetter = word[0].toUpperCase 
  return firstLetter+word.slice(1, word.length -1)
}

function Nav () {
  // console.log(Object.keys(ranks))
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {Object.keys(ranks).map (rank => {
          return (<li><Link to={`/${rank}`}>{rank}</Link>
          </li>)
        })}
      </ul>
    </div>
  )
}

export default Nav
