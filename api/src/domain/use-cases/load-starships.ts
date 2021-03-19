import { StarshipModel } from '@/domain/models'

export interface LoadStarships {
  load: () => Promise<LoadStarships.Result>
}

export namespace LoadStarships {
  export type Result = StarshipModel[]
}
