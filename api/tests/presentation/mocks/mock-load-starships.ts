import { LoadStarships } from '@/domain/use-cases'
import { mockStarshipModel } from '@/tests/domain/mocks'

export class LoadStarshipsSpy implements LoadStarships {
  calls = 0
  result: LoadStarships.Result = [
    mockStarshipModel(),
    mockStarshipModel()
  ]

  async load (): Promise<LoadStarships.Result> {
    this.calls++
    return this.result
  }
}
