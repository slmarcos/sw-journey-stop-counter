import { RestLoadStarships } from '@/data/use-cases'
import { LoadStarships } from '@/domain/use-cases'
import { AxiosLoadStarshipsRequest } from '@/infra/rest/requests'

export const makeRestLoadStarshipsFactory = (): LoadStarships => {
  const axiosLoadStarshipsRequest = new AxiosLoadStarshipsRequest()
  return new RestLoadStarships(axiosLoadStarshipsRequest)
}
