import { StarshipModel } from '@/domain/models'

export interface LoadStarships {
  load: (distance: LoadStarships.Params) => Promise<LoadStarships.Result>
}

export namespace LoadStarships {
  export type Params = number
  export type Result = StarshipModel[]
}
