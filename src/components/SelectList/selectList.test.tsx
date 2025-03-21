import { render, screen, fireEvent } from '@testing-library/react-native'

import { SelectList } from "@components/SelectList"
describe('Component: selectList', () => {
  it('should be return city details selected. ', () => {
    const data = [
      {id: '1', name: 'Campinas', latitude: 123, longitude: 180},
      {id: '2', name: 'Foz do Iguaçu', latitude: 789, longitude: 987},
    ]

    const onPress = jest.fn()

    render(
      <SelectList
        data={data}
        onChange={() => {}}
        onPress={onPress}
      />
    )

    //const selectedCity = screen.getByText("Campinas")
    const selectedCity = screen.getByText(/camp/i)
    fireEvent.press(selectedCity)

    expect(onPress).toHaveBeenCalledTimes(1)
  })
})