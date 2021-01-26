import React from 'react'
import ranks from '../../data/ranks'

function Description(props) {
	const data = props.match.params.ranks
	const name = props.match.params.name

	return (
		<>
			<div>
				{ranks[data].map(text => {
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
			</div>
		</>
	)
}

export default Description
