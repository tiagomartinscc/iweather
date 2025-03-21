import { render, screen } from '@testing-library/react-native'

import { Input } from "@components/Input"

describe('Component: Input', () => {
  it ('should be render without activity indicator if isLoading prop is undefined', () => {
    render(<input />)

    const activityIndicator = screen.queryByTestId('activity-indicator')
    expect(activityIndicator).toBeNull()
  })
})