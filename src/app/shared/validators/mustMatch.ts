import {AbstractControl} from "@angular/forms";


export function mustMatch(controlsNames: string[], setErrorsTo?: string[]) {
  return (g: AbstractControl<any, any>) => {
    const values = controlsNames.map(controlName => g.get(controlName))
      .map(control => control?.value);
    const uniqueValues = new Set(values);
    const controlsValuesAreEqual = uniqueValues.size === 1;

    if (!controlsValuesAreEqual) {
      if (setErrorsTo?.length) {
        setErrorsTo.forEach(name => g.get(name)?.setErrors({mustmatch: true}));
      }
      return {mustmatch: true};
    }

    return null;
  }
}
