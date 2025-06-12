import { validateSync } from 'class-validator';
import {
  FieldsErrors,
  ValidatorFieldsInterface,
} from './validator-fields.interface';

export abstract class ClassValidatorFields<PropsValidated>
  implements ValidatorFieldsInterface<PropsValidated>
{
  errors: FieldsErrors = {};
  validatedData: PropsValidated = {} as PropsValidated;

  validate(data: any): boolean {
    const errors = validateSync(data);

    // se não houver erros, retorna true e valida os dados
    if (errors.length == 0) {
      this.validatedData = data;
      return true;
    }

    // se houver erros, retorna false e valida os dados
    if (errors.length > 0) {
      this.errors = {};
      for (const error of errors) {
        const field = error.property;
        this.errors[field] = Object.values(error.constraints || {});
      }
    }

    return !errors.length;
  }
}
