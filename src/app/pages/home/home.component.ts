import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Observable } from 'rxjs'

import { ShoppingCartFillIconComponent } from '../../components/icons/shopping-cart-fill-icon.component'
import { PackageIconComponent } from '../../components/icons/package-icon.component'
import { CoffeeFillIconComponent } from '../../components/icons/coffee-fill-icon.component'
import { TimerFillIconComponent } from '../../components/icons/timer-fill-icon.component'
import { CoffeeItemComponent } from '../../components/coffee-item/coffee-item.component'
import { Coffee } from '../../models/coffee.model'
import { CoffeeService } from '../../services/coffee.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ShoppingCartFillIconComponent,
    PackageIconComponent,
    CoffeeFillIconComponent,
    TimerFillIconComponent,
    CoffeeItemComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  coffeeList$!: Observable<Coffee[]>

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.coffeeList$ = this.coffeeService.getCoffees()
  }

  coffeeTrackById(_: number, coffee: Coffee): string {
    return coffee.id
  }
}
