import { Component } from '@angular/core'

import { CartIconComponent } from '../cart-icon/cart-icon.component'
import { InputQuantityComponent } from '../input-quantity/input-quantity.component'
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-coffee-item',
  standalone: true,
  imports: [CartIconComponent, InputQuantityComponent],
  templateUrl: './coffee-item.component.html',
  styleUrl: './coffee-item.component.scss'
})
export class CoffeeItemComponent {
  constructor(private cartService: CartService) {}

  handleDecrease(): void {
    console.log('decrease')
  }

  handleIncrease(): void {
    console.log('increase')
  }
}
