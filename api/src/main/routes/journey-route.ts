import { adaptRoute } from '@/main/adapters'
import { makeLoadStarshipsController } from '@/main/factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/journey/starships/:distance', adaptRoute(makeLoadStarshipsController()))
}
