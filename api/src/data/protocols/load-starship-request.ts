import { StarshipRequestResult } from '@/domain/models'

export interface LoadStarshipRequest {
  load: () => Promise<LoadStarshipRequest.Result>
}

export namespace LoadStarshipRequest {
  export type Result = StarshipRequestResult[]
}
