import {FormGroup} from "@angular/forms";

export function mustMatch(...controlsNames: string[]) {
  return (g: FormGroup) => {
    const values = controlsNames.map(controlName => g.controls[controlName])
      .map(control => control.value);
    const uniqueValues = new Set(values);
    const controlsValuesAreEqual = uniqueValues.size === 1;

    if (!controlsValuesAreEqual) {
      return {mustMatch: true};
    }

    return null;
  }
}
