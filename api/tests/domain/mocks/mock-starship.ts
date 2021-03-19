import { StarshipRequestResult } from '@/domain/models'

import faker from 'faker'

export const mockStarshipRequestResult = (): StarshipRequestResult => ({
  name: faker.vehicle.vehicle(),
  mglt: faker.random.number(),
  consumables: faker.random.number()
})
