import { api } from './api'
import { getCityByNameService } from './getCityByNameService'
describe('API: getCityByNameService', () => {
  it('should return city details by name', async () => {
    const data = {
      data: {
        id: '1',
        name: 'São Paulo',
        sys: {
          country: 'BR'
        },
        coord: {
          lat: 123,
          lon: 456
        }
      }
    }
    jest.spyOn(api, 'get').mockResolvedValue(data)

    const response = await getCityByNameService('São Paulo')
    expect(response.length).toBeGreaterThan(0)
  })
})