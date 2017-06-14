import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, args: any[]): any {
    if (!value) return value;

    return value.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}

@Pipe({name: 'tofixed'})
export class ToFixedPipe implements PipeTransform {
  transform(value: number, digits: number = 2): any {
    if(!value || isNaN(+value)) return value;

    return value.toFixed(digits);
  }
}

@Pipe({name: 'total'})
export class TotalPipe implements PipeTransform {
  transform(value: number[]): any {
    if (!value) return value;

    if(value.constructor !== Array) throw new Error("Value is not an Array");

    return value.reduce(function(a, b) {
      if(typeof a != "number" || typeof b != "number") {
        throw new Error("Array values should be all numbers");
      }
      return a + b;
    }, 0);
  }
}

@Pipe({name: 'substr'})
export class SubStringPipe implements PipeTransform {
  transform(value: string, start: number = 0, length: number): any {
    if(!value || typeof value !== "string" || typeof start !== "number") return value;

    if(length === undefined || typeof length !== "number") return value.substr(start);

    return value.substr(start, length);
  }
}

@Pipe({name: 'qoute'})
export class QoutePipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    if (!value) return value;

    return '"' + value.toString() + '"';
  }
}

@Pipe({name: 'replace'})
export class ReplacePipe implements PipeTransform {
  transform(value: string, replace: string, replacement: string = ""): string {
    if (!value) return value;

    return value.replace(replace, replacement);
  }
}

@Pipe({name: 'replaceAll'})
export class ReplaceAllPipe implements PipeTransform {
  transform(value: string, replace: string, replacement: string = ""): string {
    if (!value) return value;
    let regex = new RegExp(replace, 'g');

    return value.replace(regex, replacement);
  }
}
