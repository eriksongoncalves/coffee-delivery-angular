import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from '../../environments/environment'
import { Observable } from 'rxjs'
import { Coffee } from '../models/coffee.model'

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  constructor(private httpClient: HttpClient) {}

  getCoffees(): Observable<Coffee[]> {
    return this.httpClient.get<Coffee[]>(`${environment.API_BASE_URL}/coffees`)
  }
}
