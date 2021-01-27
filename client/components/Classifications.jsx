import React from 'react'
import ranks from '../../data/ranks.js'
import { Link } from 'react-router-dom'

function Classifications(props) {
    let b = props.match.params.rank
    const classes = (ranks[b])
    console.log(classes)
    return (
        <div>
            <h2>{b}</h2>
            <ul>
                {classes.map(classification => {
                    return (
                        <li key={classification.id}>
                            <Link to={`/Ranks/${b}/${classification.name}`}>{classification.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )



}

export default Classifications
