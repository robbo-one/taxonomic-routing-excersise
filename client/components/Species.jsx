import React from 'react'
import { Link } from 'react-router-dom'
import species from '../../data/species'

function Species (props) {
const rankSingle = rankMap[rank]
const name = props.match.params.name
const rankMap = {
    kingdoms: 'kingdom',
    phyla: 'phylum',
    classes: 'class',
    families: 'family',
    genera: 'genus'
}

return (
<>
<h2>Species</h2>
<ul>
    {species.filter(aSpecies => {
        return aSpecies[rankSingle] == name
    }).map(aSpecies => {

        return (
    <li>
        <Link to={`/species/${aSpecies.id}`}>{aSpecies.name}</Link>
    </li>
        )
    })}
</ul>
</>
)
}

export default Species
