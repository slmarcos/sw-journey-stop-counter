import { LoadStarshipsController } from '@/presentation/controllers'
import { badRequest, ok, serverError } from '@/presentation/helpers'
import { throwError } from '@/tests/domain/helpers'
import { LoadStarshipsSpy, ValidatorSpy } from '@/tests/presentation/mocks'

const mockRequest = {
  distance: 1000000
}

type SutTypes = {
  sut: LoadStarshipsController
  validatorSpy: ValidatorSpy
  loadStarshipsSpy: LoadStarshipsSpy
}

const makeSut = (): SutTypes => {
  const validatorSpy = new ValidatorSpy()
  const loadStarshipsSpy = new LoadStarshipsSpy()
  const sut = new LoadStarshipsController(validatorSpy, loadStarshipsSpy)
  return {
    sut,
    validatorSpy,
    loadStarshipsSpy
  }
}

describe('LoadStarshipsController', () => {
  test('Should call Validator with correct params', async () => {
    const { sut, validatorSpy } = makeSut()
    await sut.handle(mockRequest)
    expect(validatorSpy.input).toEqual(mockRequest)
  })

  test('Should returns badRequest if Validator fails', async () => {
    const { sut, validatorSpy } = makeSut()
    validatorSpy.error = new Error()
    const httpResponse = await sut.handle(mockRequest)
    expect(httpResponse).toEqual(badRequest(validatorSpy.error))
  })

  test('Should calls LoadStarships', async () => {
    const { sut, loadStarshipsSpy } = makeSut()
    await sut.handle(mockRequest)
    expect(loadStarshipsSpy.calls).toBe(1)
  })

  test('Should returns ok and array of StarshipModel on success', async () => {
    const { sut, loadStarshipsSpy } = makeSut()
    const response = await sut.handle(mockRequest)
    expect(response).toEqual(ok(loadStarshipsSpy.result))
  })

  test('Should returns serverError if LoadStarships throws', async () => {
    const { sut, loadStarshipsSpy } = makeSut()
    jest.spyOn(loadStarshipsSpy, 'load').mockImplementationOnce(throwError)
    const response = await sut.handle(mockRequest)
    expect(response).toEqual(serverError(new Error()))
  })
})
