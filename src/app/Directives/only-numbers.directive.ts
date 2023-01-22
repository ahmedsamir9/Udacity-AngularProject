import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {

  private decimalReg: RegExp;
  constructor(private el: ElementRef) {
    this.decimalReg = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    const e = <KeyboardEvent>event;
    const keyCode = e.keyCode || e.which;
    if ([46, 8, 9, 27, 13, 110, 190].indexOf(keyCode) !== -1 ||
      // Allow: Ctrl+A
      (keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+C
      (keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+V
      (keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+X
      (keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
      // Allow: home, end, left, right
      (keyCode >= 35 && keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }
    const current = <string>this.el.nativeElement.value;
    let next = current.concat(e.key);
    if (next === '-') {
      next += '0';
    }
    if (next && !String(next).match(this.decimalReg)) {
      event.preventDefault();
    }
    // Ensure that it is a number and stop the keypress
    // if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
    //   e.preventDefault();
    // }
  }

}
