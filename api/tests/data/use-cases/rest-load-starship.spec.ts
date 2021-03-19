import { RestLoadStarships } from '@/data/use-cases'
import { LoadStarshipRequestSpy } from '@/tests/data/mocks'

type SutTypes = {
  sut: RestLoadStarships
  loadStarshipRequestSpy: LoadStarshipRequestSpy
}

const makeSut = (): SutTypes => {
  const loadStarshipRequestSpy = new LoadStarshipRequestSpy()
  const sut = new RestLoadStarships(loadStarshipRequestSpy)
  return {
    sut,
    loadStarshipRequestSpy
  }
}

describe('RestLoadStarships use case', () => {
  test('Should calls loadStarshipRequest', async () => {
    const { sut, loadStarshipRequestSpy } = makeSut()
    await sut.load()
    expect(loadStarshipRequestSpy.calls).toBe(1)
  })
})
