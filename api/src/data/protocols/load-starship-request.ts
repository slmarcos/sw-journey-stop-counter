import { StarshipRequestResult } from '@/domain/models'

export interface LoadStarshipRequest {
  load: (page?: LoadStarshipRequest.Params) => Promise<LoadStarshipRequest.Result>
}

export namespace LoadStarshipRequest {
  export type Params = number
  export type Result = StarshipRequestResult[]
}
