import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cgpaToPercentage',
})
export class CgpaToPercentagePipe implements PipeTransform {
  transform(cgpa: number | null): string {
    if (cgpa === null || cgpa === undefined) return '-';

    const percentage = cgpa * 9.5;
    return `${percentage.toFixed(2)}%`;
  }
}
