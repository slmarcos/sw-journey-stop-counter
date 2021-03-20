import { RequiredNumberFieldValidator, ValidatorComposite } from '@/validation/validators'
import { Validator } from '@/presentation/protocols'

export const makeLoadStarshipsValidator = (): ValidatorComposite => {
  const validators: Validator[] = []
  validators.push(new RequiredNumberFieldValidator('distance'))
  return new ValidatorComposite(validators)
}
