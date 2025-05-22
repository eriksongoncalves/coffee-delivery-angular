import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { Coffee } from '../models/coffee.model'
import { CartStorageService } from './cart-storage.service'

export type CartItem = Coffee & {
  quantity: number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([])
  cartItems$ = this.cartItems.asObservable()

  constructor(private cartStorageService: CartStorageService) {
    const cartItemsFromStorage = this.cartStorageService.get()

    this.cartItems.next(cartItemsFromStorage)
  }

  addItem(coffee: Coffee): void {
    const currentCart = this.cartItems.value
    const itemIndex = currentCart.findIndex(item => item.id === coffee.id)

    if (itemIndex === -1) {
      currentCart.push({ ...coffee, quantity: 1 })
    } else {
      currentCart[itemIndex].quantity++
    }

    this.cartItems.next(currentCart)
    this.cartStorageService.save(currentCart)
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
      this.cartStorageService.save(currentCart)
    }
  }

  removeItemFromCart(coffeeId: string): void {
    const currentCart = this.cartItems.value
    const items = currentCart.filter(item => item.id !== coffeeId)

    this.cartItems.next(items)
  }

  getTotal(): number {
    return this.cartItems.value.reduce((prev, item) => prev + item.price * item.quantity, 0)
  }

  clear(): void {
    this.cartStorageService.clear()
    this.cartItems.next([])
  }
}
