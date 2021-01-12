import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithRouter } from '../testUtils'

import { RankListing } from './RankListing'

describe('rank classification list', () => {
  it('renders a link for every classification in the specified rank', () => {
    const match = {
      params: {
        rank: 'testRank1'
      }
    }
    const ranks = {
      testRank1: [{
        name: 'test classification 1'
      }, {
        name: 'test classification 2'
      }],
      testRank2: [{
        name: 'test classification 3'
      }]
    }
    renderWithRouter(<RankListing match={match} ranks={ranks} />)
    const classifications = screen.getAllByRole('link')
    expect(classifications).toHaveLength(2)
  })
})
