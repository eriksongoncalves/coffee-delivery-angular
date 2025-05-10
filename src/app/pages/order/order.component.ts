import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { MapPinLineIconComponent } from '../../components/icons/map-pin-line-icon.component'
import { CurrencyDollarIconComponent } from '../../components/icons/currency-dollar-icon.component'
import { MoneyIconComponent } from '../../components/icons/money-icon.component'
import { CreditCardIconComponent } from '../../components/icons/credit-card-icon.component'
import { BankIconComponent } from '../../components/icons/bank-icon.component'
import { InputQuantityComponent } from '../../components/input-quantity/input-quantity.component'
import { TrashIconComponent } from '../../components/icons/trash-icon.component'
import { CartService, CartItem } from '../../services/cart.service'
import { Coffee } from '../../models/coffee.model'

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    MapPinLineIconComponent,
    CurrencyDollarIconComponent,
    ReactiveFormsModule,
    MoneyIconComponent,
    CreditCardIconComponent,
    BankIconComponent,
    InputQuantityComponent,
    TrashIconComponent,
    CommonModule
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({})
  cartItems!: CartItem[]
  total = 0

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) {}

  private initializeForm(): void {
    this.formGroup = this.formBuilder.group({
      zipcode: ['', [Validators.required, Validators.maxLength(9)]],
      address: ['', [Validators.required, Validators.maxLength(150)]],
      number: ['', [Validators.required]],
      complement: ['', [Validators.maxLength(150)]],
      district: ['', [Validators.required, Validators.maxLength(150)]],
      city: ['', [Validators.required, Validators.maxLength(150)]],
      state: ['', [Validators.required, Validators.maxLength(2)]],
      payment_type: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.initializeForm()
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items
      this.total = items.reduce((total, item) => total + item.quantity * item.price, 0)
    })
  }

  cartItemTrackById(_: number, cartItem: Coffee): string {
    return cartItem.id
  }

  handleRemoveItemFromCart(coffeeId: string): void {
    this.cartService.removeItemFromCart(coffeeId)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleDecrease(_: any, coffeeId: string): void {
    this.cartService.removeItem(coffeeId)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleIncrease(_: any, coffee: Coffee): void {
    this.cartService.addItem(coffee)
  }

  handleSubmit(): void {
    console.log('>>> submit', this.formGroup.value)
  }
}
