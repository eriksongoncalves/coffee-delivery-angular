import { Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { OrderComponent } from './pages/order/order.component'
import { OrderCompletedComponent } from './pages/order-completed/order-completed.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'order-completed',
    component: OrderCompletedComponent
  }
]
