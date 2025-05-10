import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { AddressModel } from '../models/address.model'

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {
  constructor(private httpClient: HttpClient) {}

  getAddressFromZipcode(zipcode: string): Observable<AddressModel> {
    return this.httpClient.get<AddressModel>(`https://viacep.com.br/ws/${zipcode}/json/`)
  }
}
