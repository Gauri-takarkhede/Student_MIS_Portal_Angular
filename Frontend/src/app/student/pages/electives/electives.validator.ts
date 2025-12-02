import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const uniquePreferencesValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const p1 = control.get('p1')?.value;
  const p2 = control.get('p2')?.value;
  const p3 = control.get('p3')?.value;

  if (!p1 || !p2 || !p3) return null;

  const set = new Set([p1, p2, p3]);
  return set.size === 3 ? null : { duplicatePreferences: true };
};
