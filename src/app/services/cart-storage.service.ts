import { Injectable } from '@angular/core'
import { CartItem } from './cart.service'

@Injectable({
  providedIn: 'root'
})
export class CartStorageService {
  private STORAGE_KEY = 'coffee_delivery_cart'

  constructor() {}

  save(cartItems: CartItem[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cartItems))
  }

  get(): CartItem[] {
    const cartItems = localStorage.getItem(this.STORAGE_KEY)

    if (cartItems) {
      return JSON.parse(cartItems)
    }

    return []
  }

  clear(): void {
    localStorage.removeItem(this.STORAGE_KEY)
  }
}
