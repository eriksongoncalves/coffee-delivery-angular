import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { takeUntil, debounceTime, Subject } from 'rxjs'

import { MapPinLineIconComponent } from '../../components/icons/map-pin-line-icon.component'
import { CurrencyDollarIconComponent } from '../../components/icons/currency-dollar-icon.component'
import { MoneyIconComponent } from '../../components/icons/money-icon.component'
import { CreditCardIconComponent } from '../../components/icons/credit-card-icon.component'
import { BankIconComponent } from '../../components/icons/bank-icon.component'
import { InputQuantityComponent } from '../../components/input-quantity/input-quantity.component'
import { TrashIconComponent } from '../../components/icons/trash-icon.component'
import { CartService, CartItem } from '../../services/cart.service'
import { Coffee } from '../../models/coffee.model'
import { ViaCepService } from '../../services/viacep.service'
import { CepMaskDirective } from '../../directives/cep-mask.directive'

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
    CommonModule,
    CepMaskDirective
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>()
  formGroup: FormGroup = new FormGroup({})
  cartItems!: CartItem[]
  total = 0

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private viaCepService: ViaCepService
  ) {}

  private getAddress(zipcode: string): void {
    this.viaCepService
      .getAddressFromZipcode(zipcode)
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        this.formGroup.patchValue({
          address: response.logradouro,
          district: response.bairro,
          city: response.estado,
          state: response.uf
        })
      })
  }

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

    this.formGroup
      .get('zipcode')
      ?.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(500))
      .subscribe((value: string) => {
        if (value.length > 8) {
          value = value.replace(/\D/g, '')

          this.getAddress(value)
        }
      })
  }

  ngOnInit(): void {
    this.initializeForm()
    this.cartService.cartItems$.pipe(takeUntil(this.destroy$)).subscribe(items => {
      this.cartItems = items
      this.total = items.reduce((total, item) => total + item.quantity * item.price, 0)
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
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
