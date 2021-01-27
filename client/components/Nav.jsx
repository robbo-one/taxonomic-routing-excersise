import React from 'react'
import { Link } from 'react-router-dom'
import ranksData from "../../data/ranks.js"

function Nav(props) {
  // console.log(Object.keys(ranksData))
  return (
    <nav>
      <h2>Nav</h2>
      <ul>
        {Object.keys(ranksData).map(rank => {
          return (
            <li key={rank}>
              <Link to={`/list/${rank}`}>
                {rank}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );

};

export default Nav
