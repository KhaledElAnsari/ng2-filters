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
    if (!value) return value;

    if(value.constructor !== Number) throw new Error("tofixed: Value is not Number type");
    if(digits.constructor !== Number) throw new Error("tofixed: Digits are not Number type");

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
    if (!value) return value;

    if(value.constructor !== String) throw new Error("substr: Value is not String type");
    if(start.constructor !== Number) throw new Error("substr: Start is not Number type");

    if(length === undefined) {
      return value.substr(start);
    }

    if(length.constructor !== Number) throw new Error("substr: Length is not Number type");

    return value.substr(start, length);
  }
}

export var NG2PIPES = [
  CapitalizePipe,
  ToFixedPipe,
  TotalPipe,
  SubStringPipe,
];
