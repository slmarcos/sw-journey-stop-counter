import app from '@/main/configs/app'
import { mockStarshipsResponsePageEnd, mockStarshipsResponsePageOne } from '@/tests/infra/rest/mocks'
import { SwapiEndpointHelper } from '@/infra/rest/helpers'

import request from 'supertest'
import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'

let axiosMock: AxiosMockAdapter

describe('Animal Routes', () => {
  beforeAll(() => {
    axiosMock = new AxiosMockAdapter(axios)
  })

  afterAll(() => {
    axiosMock.restore()
  })

  beforeEach(() => {
    axiosMock.reset()
  })

  describe('[GET] /api/journey/starships/:distance', () => {
    test('[GET] Should returns status code 400 and invalid param error if an invalid distance is provided', async () => {
      const distance = 'invalid_value'
      await request(app)
        .get(`/api/journey/starships/${distance}`)
        .expect(400, {
          error: 'Invalid param: distance'
        })
    })

    test('[GET] Should returns status code 200 and array of StarshipModel on success', async () => {
      const distance = 1000000
      const responsePageOne = mockStarshipsResponsePageOne()
      const responsePageEnd = mockStarshipsResponsePageEnd()
      axiosMock
        .onGet(SwapiEndpointHelper.loadStarshipsEndpoint(1))
        .replyOnce(200, responsePageOne)
        .onGet(SwapiEndpointHelper.loadStarshipsEndpoint(2))
        .replyOnce(200, responsePageEnd)
      await request(app)
        .get(`/api/journey/starships/${distance}`)
        .expect(200, [
          { name: 'Millennium Falcon', stops: 9 },
          { name: 'Y-wing', stops: 74 },
          { name: 'Naboo star skiff', stops: 'unknown' },
          { name: 'Scimitar', stops: 'unknown' }
        ])
    })
  })
})
