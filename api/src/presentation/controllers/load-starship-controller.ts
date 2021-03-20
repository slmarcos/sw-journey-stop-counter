import { Controller, HttpResponse, Validator } from '@/presentation/protocols'
import { ok, badRequest, serverError } from '@/presentation/helpers'
import { LoadStarships } from '@/domain/use-cases'

export class LoadStarshipsController implements Controller {
  constructor (
    private readonly validator: Validator,
    private readonly loadStarships: LoadStarships
  ) { }

  async handle (request: LoadStarshipsController.Params): Promise<LoadStarshipsController.Result> {
    try {
      const error = this.validator.validate(request)
      if (error) {
        return badRequest(error)
      }
      const { distance } = request
      const starships = await this.loadStarships.load(distance)
      return ok(starships)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace LoadStarshipsController {
  export type Params = {
    distance: number
  }

  export type Result = HttpResponse
}
