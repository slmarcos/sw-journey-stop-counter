import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const h1Element = screen.getByText(/Star Wars - Starship stop counter/i)
  expect(h1Element).toBeInTheDocument()
})
