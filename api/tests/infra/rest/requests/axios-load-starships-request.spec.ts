import { AxiosLoadStarshipsRequest } from '@/infra/rest/requests'
import { SwapiEndpointHelper } from '@/infra/rest/helpers'
import { mockStarshipsResponse } from '@/tests/infra/rest/mocks'

import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'

type SutTypes = {
  sut: AxiosLoadStarshipsRequest
}

const makeSut = (): SutTypes => {
  const sut = new AxiosLoadStarshipsRequest()
  return {
    sut
  }
}

let axiosMock: AxiosMockAdapter

describe('AxiosLoadStarshipsRequest', () => {
  beforeAll(() => {
    axiosMock = new AxiosMockAdapter(axios)
  })

  afterAll(() => {
    axiosMock.restore()
  })

  beforeEach(() => {
    axiosMock.reset()
  })

  test('Should returns an array of StarshipRequestResult on request success', async () => {
    const { sut } = makeSut()
    const response = mockStarshipsResponse()
    axiosMock
      .onGet(SwapiEndpointHelper.loadStarshipsEndpoint())
      .replyOnce(200, response)
    const starshipsResult = await sut.load()
    expect(starshipsResult).toEqual([
      {
        name: 'Millennium Falcon',
        consumables: 1440,
        mglt: 75
      },
      {
        name: 'Y-wing',
        consumables: 168,
        mglt: 80
      }
    ])
  })
})
