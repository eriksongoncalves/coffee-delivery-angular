import { Component } from '@angular/core'

import { MapPinFillIconComponent } from '../../components/icons/map-pin-fill-icon.component'
import { TimerFillIconComponent } from '../../components/icons/timer-fill-icon.component'
import { MoneyIconComponent } from '../../components/icons/money-icon.component'

@Component({
  selector: 'app-order-completed',
  standalone: true,
  imports: [MapPinFillIconComponent, TimerFillIconComponent, MoneyIconComponent],
  templateUrl: './order-completed.component.html',
  styleUrl: './order-completed.component.scss'
})
export class OrderCompletedComponent {}
