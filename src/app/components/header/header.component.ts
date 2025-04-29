import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

import { MapPinFillIconComponent } from '../icons/map-pin-fill-icon.component'
import { CartIconComponent } from '../cart-icon/cart-icon.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MapPinFillIconComponent, CartIconComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {}
