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
    const distance = 1000000
    await sut.load(distance)
    expect(loadStarshipRequestSpy.calls).toBe(1)
  })

  test('Should throws if loadStarshipRequest throws', async () => {
    const { sut, loadStarshipRequestSpy } = makeSut()
    jest.spyOn(loadStarshipRequestSpy, 'load').mockImplementationOnce(throwError)
    const distance = 1000000
    const promise = sut.load(distance)
    await expect(promise).rejects.toThrow()
  })

  test('Should returns an array of StarshipModel on success', async () => {
    const { sut, loadStarshipRequestSpy } = makeSut()
    const distance = 1000000
    const starships = await sut.load(distance)
    const result = loadStarshipRequestSpy.result.map((starship) => {
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
    expect(starships).toEqual(result)
  })
})
