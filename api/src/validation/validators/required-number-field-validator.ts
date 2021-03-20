import { InvalidParamError } from '@/presentation/errors'
import { Validator } from '@/presentation/protocols'

export class RequiredNumberFieldValidator implements Validator {
  constructor (
    private readonly fieldName: string
  ) { }

  validate (input: any): Error | null {
    let isValid = false
    if (!isNaN(input[this.fieldName])) {
      isValid = true
    }
    return !isValid ? new InvalidParamError(this.fieldName) : null
  }
}
