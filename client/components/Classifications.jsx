import React from 'react'
import ranks from '../../data/ranks.js'
import { Link } from 'react-router-dom'


function Classifications(props) {

    let b = props.match.params.rank
    // variable b equals /Ranks/:rank e.g. /Ranks/genera

    const classes = (ranks[b])
    // variable classes equals ranks.js rank name e.g. kingdoms, phyla, classes, orders, families, genera

    console.log(classes)
    //console.log so you can see the relevant rank array e.g. genera 0: {id: 25, name: "Drosophila", description: "Drosophila is. . ."}

    return (

        <div>

            <h2>{b}</h2> {/* this header shows rank, declared back on line 6 */}

            <ul>

                {classes.map(classification => {
                    {/* map over classes array, and for the classification parameter you've just named . . .*/ }

                    return (

                        <li key={classification.id}> {/* each bulletpoint = each .id key from classes array */}

                            <Link to={`/Ranks/${b}/${classification.name}`}>{classification.name}
                            </Link>
                            {/* each bulletpoint lists the .name key from classes array AND is a link to another page for that name's info*/}

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Classifications
