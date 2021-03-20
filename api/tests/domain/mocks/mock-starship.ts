import { StarshipModel, StarshipRequestResult } from '@/domain/models'

import faker from 'faker'

export const mockStarshipRequestResult = (): StarshipRequestResult[] => ([
  {
    name: faker.vehicle.vehicle(),
    mglt: 'unknown',
    consumables: 'unknown'
  },
  {
    name: faker.vehicle.vehicle(),
    mglt: 'unknown',
    consumables: faker.random.number()
  },
  {
    name: faker.vehicle.vehicle(),
    mglt: faker.random.number().toString(),
    consumables: 'unknown'
  },
  {
    name: faker.vehicle.vehicle(),
    mglt: faker.random.number().toString(),
    consumables: faker.random.number()
  }
])

export const mockStarshipModel = (): StarshipModel => ({
  name: faker.vehicle.vehicle(),
  stops: faker.random.number()
})
