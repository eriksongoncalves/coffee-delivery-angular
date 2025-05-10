import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { ViaCepResponse } from '../models/viacep.model'

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {
  constructor(private httpClient: HttpClient) {}

  getAddressFromZipcode(zipcode: string): Observable<ViaCepResponse> {
    return this.httpClient.get<ViaCepResponse>(`https://viacep.com.br/ws/${zipcode}/json/`)
  }
}
