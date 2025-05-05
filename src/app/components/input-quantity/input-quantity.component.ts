import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'

import { MinusIconComponent } from '../icons/minus-icon.component'
import { PlusIconComponent } from '../icons/plus-icon.component'

@Component({
  selector: 'app-input-quantity',
  standalone: true,
  imports: [MinusIconComponent, PlusIconComponent],
  templateUrl: './input-quantity.component.html',
  styleUrl: './input-quantity.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputQuantityComponent {
  @Output()
  decrease = new EventEmitter<number>()

  @Output()
  increase = new EventEmitter<number>()

  @Input()
  quantity = 0

  increaseQtd(): void {
    this.increase.emit(1)
  }

  decreaseQtd(): void {
    this.decrease.emit(1)
  }

  constructor() {}
}
