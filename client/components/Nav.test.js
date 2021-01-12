import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithRouter } from '../testUtils'

import { Nav } from './Nav'

describe('nav list', () => {
  const ranks = {
    testRank1: ['test data here...'],
    testRank2: ['test data here...']
  }
  const location = {
    pathname: '/list/testRank1'
  }

  it('renders a nav link for every rank on props', () => {
    renderWithRouter(<Nav ranks={ranks} location={location} />)
    const navLinks = screen.getAllByRole('link')
    expect(navLinks).toHaveLength(2)
  })
  it('adds "selected" className to rank in the location pathname', () => {
    renderWithRouter(<Nav ranks={ranks} location={location} />)
    const firstLink = screen.getByRole('link', { name: 'TestRank1' })
    expect(firstLink.className).toBe('selected')
  })
  it('doesn\'t add a className to rank link if not currently selected', () => {
    renderWithRouter(<Nav ranks={ranks} location={location} />)
    const otherLink = screen.getByRole('link', { name: 'TestRank2' })
    expect(otherLink.className).toBeFalsy()
  })
})
