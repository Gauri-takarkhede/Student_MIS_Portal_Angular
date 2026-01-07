import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const uniquePreferencesValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if (!control || !control.value) return null;

  const prefs = control.get('preferences');

  if (!prefs || !prefs.value || !Array.isArray(prefs.value)) return null;

  const arr = prefs.value.filter((v: any) => v); // remove empty

  const unique = new Set(arr);

  return unique.size === arr.length ? null : { duplicatePreferences: true };
};
