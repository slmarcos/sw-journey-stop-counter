import { LoadStarshipRequest } from '@/data/protocols'
import { LoadStarships } from '@/domain/use-cases'

export class RestLoadStarships implements LoadStarships {
  constructor (
    private readonly loadStarshipRequest: LoadStarshipRequest
  ) { }

  async load (distance: LoadStarships.Params): Promise<LoadStarships.Result> {
    const result = await this.loadStarshipRequest.load()
    const starships = result.map((starship) => {
      const stops = Math.floor(distance / starship.consumables / starship.mglt)
      return {
        name: starship.name,
        stops
      }
    })
    return starships
  }
}
