import React from 'react'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { renderWithRouter } from '../testUtils'

import { SpeciesListing } from './SpeciesListing'

describe('species list', () => {
  it('renders a link for every species in the specified classification', () => {
    const match = {
      params: {
        rank: 'coolRank',
        name: 'coolestClassification'
      }
    }
    const species = [{
      name: 'test species 1',
      coolRank: 'coolestClassification'
    }, {
      name: 'test species 2',
      coolRank: 'lessCoolClassification'
    }, {
      name: 'test species 3',
      coolRank: 'coolestClassification'
    }]

    renderWithRouter(<SpeciesListing match={match} species={species} />)
    const categories = screen.getAllByRole('link')
    expect(categories).toHaveLength(2)
    expect(categories[1]).toHaveTextContent('test species 3')
  })
})
