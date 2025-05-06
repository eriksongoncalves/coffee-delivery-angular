import { Component, Input, OnInit } from '@angular/core'
import { AsyncPipe, CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common'

import { CartIconComponent } from '../cart-icon/cart-icon.component'
import { InputQuantityComponent } from '../input-quantity/input-quantity.component'
import { CartService } from '../../services/cart.service'
import { Coffee } from '../../models/coffee.model'
import { map, Observable } from 'rxjs'

@Component({
  selector: 'app-coffee-item',
  standalone: true,
  imports: [
    CommonModule,
    CartIconComponent,
    InputQuantityComponent,
    UpperCasePipe,
    CurrencyPipe,
    AsyncPipe
  ],
  templateUrl: './coffee-item.component.html',
  styleUrl: './coffee-item.component.scss'
})
export class CoffeeItemComponent implements OnInit {
  @Input()
  coffee!: Coffee

  quantity$!: Observable<number>

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.quantity$ = this.cartService.cartItems$.pipe(
      map(cartItems => cartItems.find(item => item.id === this.coffee.id)?.quantity || 0)
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleDecrease(_: any, coffeeId: string): void {
    this.cartService.removeItem(coffeeId)
    console.log('decrease', coffeeId)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleIncrease(_: any, coffee: Coffee): void {
    this.cartService.addItem(coffee)
    console.log('increase', coffee)
  }
}
