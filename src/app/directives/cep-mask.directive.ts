import { Directive, HostListener } from '@angular/core'

@Directive({
  selector: '[appCepMask]',
  standalone: true
})
export class CepMaskDirective {
  constructor() {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement
    let value = input.value

    value = value.replace(/\D/g, '')

    if (value.length > 5) {
      value = `${value.substring(0, 5)}-${value.substring(5, 8)}`
    }

    value = value.substring(0, 9)

    input.value = value
  }
}
