import { Component } from '@angular/core'
import { ShoppingCartFillIconComponent } from '../icons/shopping-cart-fill-icon.component'

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  imports: [ShoppingCartFillIconComponent],
  templateUrl: './cart-icon.component.html',
  styleUrl: './cart-icon.component.scss'
})
export class CartIconComponent {}
