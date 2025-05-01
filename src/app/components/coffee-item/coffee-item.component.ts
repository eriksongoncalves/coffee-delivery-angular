import { Component } from '@angular/core'

import { CartIconComponent } from '../cart-icon/cart-icon.component'
import { MinusIconComponent } from '../icons/minus-icon.component'
import { PlusIconComponent } from '../icons/plus-icon.component'

@Component({
  selector: 'app-coffee-item',
  standalone: true,
  imports: [CartIconComponent, MinusIconComponent, PlusIconComponent],
  templateUrl: './coffee-item.component.html',
  styleUrl: './coffee-item.component.scss'
})
export class CoffeeItemComponent {}
