import { LoadStarshipRequest } from '@/data/protocols'
import { mockStarshipRequestResult } from '@/tests/domain/mocks'

export class LoadStarshipRequestSpy implements LoadStarshipRequest {
  calls = 0
  result: LoadStarshipRequest.Result = mockStarshipRequestResult()

  async load (): Promise<LoadStarshipRequest.Result> {
    this.calls++
    return this.result
  }
}
