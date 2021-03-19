import { RestLoadStarships } from '@/data/use-cases'
import { LoadStarshipRequestSpy } from '@/tests/data/mocks'
import { throwError } from '@/tests/domain/helpers'

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

  test('Should throws if loadStarshipRequest throws', async () => {
    const { sut, loadStarshipRequestSpy } = makeSut()
    jest.spyOn(loadStarshipRequestSpy, 'load').mockImplementationOnce(throwError)
    const promise = sut.load()
    await expect(promise).rejects.toThrow()
  })
})
