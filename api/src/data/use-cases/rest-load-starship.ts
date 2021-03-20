import { LoadStarshipRequest } from '@/data/protocols'
import { LoadStarships } from '@/domain/use-cases'

export class RestLoadStarships implements LoadStarships {
  constructor (
    private readonly loadStarshipRequest: LoadStarshipRequest
  ) { }

  async load (distance: LoadStarships.Params): Promise<LoadStarships.Result> {
    const result = await this.loadStarshipRequest.load()
    const starships = result.map((starship) => {
      let stops: string | number
      if (starship.consumables === 'unknown' || starship.mglt === 'unknown') {
        stops = 'unknown'
      } else {
        stops = Math.floor(distance / (starship.consumables as number) / Number(starship.mglt))
      }
      return {
        name: starship.name,
        stops
      }
    })
    return starships
  }
}
