import { map, Observable } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AsyncPipe } from '@angular/common'

import { MapPinFillIconComponent } from '../icons/map-pin-fill-icon.component'
import { CartIconComponent } from '../cart-icon/cart-icon.component'
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MapPinFillIconComponent, CartIconComponent, RouterLink, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(private cartService: CartService) {}

  totalItemsCart$!: Observable<number>

  ngOnInit(): void {
    this.totalItemsCart$ = this.cartService.cartItems$.pipe(
      map(items => items.reduce((total, item) => total + item.quantity, 0))
    )
  }
}
