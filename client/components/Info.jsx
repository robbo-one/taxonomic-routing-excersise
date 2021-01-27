import React from 'react'
import ranks from '../../data/ranks.js'


function Info (props) {

    let path1 = props.match.params.rank
    //  e.g. /Ranks/phyla

    let path2 = props.match.params.name
    //  e.g. /Ranks/phyla/Tracheophyta

    const script = (ranks[path1])

    let match = script.find(information => {

        return information.name === path2
        // where name key = name path e.g. Tracheophyta = /Tracheophyta
    })
console.log(match)

    return (

        <div>
            <h2>{path2}</h2> {/* displays rank variable from line 7 */}
            <p>{match.description}</p> 
        </div>
    )
}


export default Info