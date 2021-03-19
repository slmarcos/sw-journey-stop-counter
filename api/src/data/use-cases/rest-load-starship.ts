import { LoadStarshipRequest } from '@/data/protocols'
import { LoadStarships } from '@/domain/use-cases'

export class RestLoadStarships implements LoadStarships {
  constructor (
    private readonly loadStarshipRequest: LoadStarshipRequest
  ) { }

  async load (): Promise<LoadStarships.Result> {
    await this.loadStarshipRequest.load()
    return null as any
  }
}
