import React from 'react'
import species from '../../data/species'

function SpeciesListing(props) {
	// const speciesData = props.match.params.species
	const id = props.match.params.id

	console.log('id', id)

	return(
	<div>
		{species.map(data => {
			if (data.id == id) {
				return (
					<>
						<h2>
							{data.name}
						</h2>
						<p>
							{data.description}
						</p>
						<img src={data.photo}></img>
					</>
				)
			}
})}
	</div>
	)
}

export default SpeciesListing