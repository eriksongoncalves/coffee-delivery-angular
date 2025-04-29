import { Component } from '@angular/core'

import { ShoppingCartFillIconComponent } from '../../components/icons/shopping-cart-fill-icon.component'
import { PackageIconComponent } from '../../components/icons/package-icon.component'
import { CoffeeFillIconComponent } from '../../components/icons/coffee-fill-icon.component'
import { TimerFillIconComponent } from '../../components/icons/timer-fill-icon.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ShoppingCartFillIconComponent,
    PackageIconComponent,
    CoffeeFillIconComponent,
    TimerFillIconComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
