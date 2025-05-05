import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { ShoppingCartFillIconComponent } from '../icons/shopping-cart-fill-icon.component'
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  imports: [ShoppingCartFillIconComponent, CommonModule],
  templateUrl: './cart-icon.component.html',
  styleUrl: './cart-icon.component.scss'
})
export class CartIconComponent implements OnInit {
  constructor(private cartService: CartService) {}

  totalItemsCart$!: Observable<number>

  ngOnInit(): void {
    this.totalItemsCart$ = this.cartService.cartItems$.pipe(
      map(items => items.reduce((total, item) => total + item.quantity, 0))
    )
  }
}
