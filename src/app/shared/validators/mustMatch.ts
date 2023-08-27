import {AbstractControl, FormGroup} from "@angular/forms";


export function mustMatch(controlsNames: string[], setErrorsTo?: string[]) {
  return (g: AbstractControl<any, any>) => {
    console.log(g);
    const values = controlsNames.map(controlName => g.get(controlName))
      .map(control => control?.value);
    const uniqueValues = new Set(values);
    const controlsValuesAreEqual = uniqueValues.size === 1;
    console.log(values);
    if (!controlsValuesAreEqual) {
      if (setErrorsTo?.length) {
        setErrorsTo.forEach(name => g.get(name)?.setErrors({mustmatch: true}));
      }
      return {mustmatch: true};
    }

    return null;
  }
}
