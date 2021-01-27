import React from 'react'
import ranks from '../../data/ranks'
import { Link } from 'react-router-dom'
import species from '../../data/species'

function Description(props) {
	const rank = props.match.params.ranks

	const rankMap = {
		kingdoms: 'kingdom',
		phyla: 'phylum',
		classes: 'class',
		families: 'family',
		genera: 'genus'
	}

	const rankSingle = rankMap[rank]

	const name = props.match.params.name
	const url = props.match.url

	// console.log('speciesname', speciesName)

	return (
		<>
			<div>
				{ranks[rank].map(text => {
					if (text.name == name) {
						return (
							<>
								<h2>
									{text.name}
								</h2>
								<p>
									{text.description}
								</p>
							</>
						)
					}
				})}
			<h2>Species</h2>
			<ul>
				{species.filter(aSpecies => {
					return aSpecies[rankSingle] == name
				}).map(aSpecies => {

					return (
				<li>
					<Link to={`${url}/species`}>{aSpecies.name}</Link>
				</li>
					)
				})}
			</ul>
			</div>
		</>
	)
}

export default Description
