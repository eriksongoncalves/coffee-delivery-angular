import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { Coffee } from '../models/coffee.model'

type CartItem = Coffee & {
  quantity: number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = new BehaviorSubject<CartItem[]>([])
  cartItems$ = this.cartItems.asObservable()

  constructor() {}

  addItem(coffee: Coffee): void {
    const currentCart = this.cartItems.value
    const itemIndex = currentCart.findIndex(item => item.id === coffee.id)

    if (itemIndex === -1) {
      currentCart.push({ ...coffee, quantity: 1 })
    } else {
      currentCart[itemIndex].quantity++
    }

    this.cartItems.next(currentCart)
  }

  removeItem(coffeeId: string): void {
    const currentCart = this.cartItems.value
    const itemIndex = currentCart.findIndex(item => item.id === coffeeId)

    if (itemIndex >= 0) {
      const item = currentCart[itemIndex]

      if (item.quantity > 1) {
        currentCart[itemIndex].quantity = item.quantity - 1
      } else {
        currentCart.splice(itemIndex, 1)
      }

      this.cartItems.next(currentCart)
    }
  }

  clear(): void {
    this.cartItems.next([])
  }
}
