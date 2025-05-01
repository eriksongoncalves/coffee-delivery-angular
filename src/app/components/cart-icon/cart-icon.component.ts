import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ShoppingCartFillIconComponent } from '../icons/shopping-cart-fill-icon.component'

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  imports: [ShoppingCartFillIconComponent, CommonModule],
  templateUrl: './cart-icon.component.html',
  styleUrl: './cart-icon.component.scss'
})
export class CartIconComponent {
  @Input()
  qtd: number = 0
}
