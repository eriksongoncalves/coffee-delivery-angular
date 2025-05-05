import { Component, Input } from '@angular/core'
import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common'

import { CartIconComponent } from '../cart-icon/cart-icon.component'
import { InputQuantityComponent } from '../input-quantity/input-quantity.component'
import { CartService } from '../../services/cart.service'
import { Coffee } from '../../models/coffee.model'

@Component({
  selector: 'app-coffee-item',
  standalone: true,
  imports: [CommonModule, CartIconComponent, InputQuantityComponent, UpperCasePipe, CurrencyPipe],
  templateUrl: './coffee-item.component.html',
  styleUrl: './coffee-item.component.scss'
})
export class CoffeeItemComponent {
  @Input()
  coffee!: Coffee

  constructor(private cartService: CartService) {}

  handleDecrease(): void {
    console.log('decrease')
  }

  handleIncrease(): void {
    console.log('increase')
  }
}
