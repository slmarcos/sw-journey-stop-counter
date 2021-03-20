import { AxiosLoadStarshipsRequest } from '@/infra/rest/requests'
import { SwapiEndpointHelper } from '@/infra/rest/helpers'
import { mockStarshipsResponsePageEnd, mockStarshipsResponsePageOne } from '@/tests/infra/rest/mocks'

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
    const responsePageOne = mockStarshipsResponsePageOne()
    const responsePageEnd = mockStarshipsResponsePageEnd()
    axiosMock
      .onGet(SwapiEndpointHelper.loadStarshipsEndpoint(1))
      .replyOnce(200, responsePageOne)
      .onGet(SwapiEndpointHelper.loadStarshipsEndpoint(2))
      .replyOnce(200, responsePageEnd)
    const starshipsResult = await sut.load()
    expect(starshipsResult).toEqual([
      {
        name: 'Millennium Falcon',
        consumables: 1440,
        mglt: '75'
      },
      {
        name: 'Y-wing',
        consumables: 168,
        mglt: '80'
      },
      {
        name: 'Naboo star skiff',
        consumables: 'unknown',
        mglt: 'unknown'
      },
      {
        name: 'Scimitar',
        consumables: 720,
        mglt: 'unknown'
      }
    ])
  })
})
