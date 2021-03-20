import { makeLoadStarshipsValidator, makeRestLoadStarshipsFactory } from '@/main/factories'
import { LoadStarshipsController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'

export const makeLoadStarshipsController = (): Controller => {
  return new LoadStarshipsController(
    makeLoadStarshipsValidator(),
    makeRestLoadStarshipsFactory()
  )
}
