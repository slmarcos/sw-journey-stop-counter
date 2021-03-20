import { SwapiEndpointHelper } from '@/infra/rest/helpers'
import { StarshipResponseModel } from '@/infra/rest/models'
import { LoadStarshipRequest } from '@/data/protocols'

import axios from 'axios'

export class AxiosLoadStarshipsRequest implements LoadStarshipRequest {
  async load (): Promise<LoadStarshipRequest.Result> {
    const { data } = await axios.get<StarshipResponseModel[]>(SwapiEndpointHelper.loadStarshipsEndpoint())
    return data.map((starship) => ({
      name: starship.name,
      mglt: Number(starship.MGLT),
      consumables: this.convertConsumablesToHour(starship.consumables)
    }))
  }

  private convertConsumablesToHour (consumables: string): number {
    const [periodQuantity, periodType] = consumables.split(' ')
    const PERIOD_IN_HOURS: { [key: string]: number } = {
      day: 24,
      week: 24 * 7,
      month: 24 * 30,
      year: 24 * 365
    }
    let result: number
    const quantity = Number(periodQuantity)
    if (quantity > 1) {
      const type = periodType.substr(0, periodType.length - 1)
      result = quantity * PERIOD_IN_HOURS[type]
    } else {
      result = PERIOD_IN_HOURS[periodType]
    }
    return result
  }
}
