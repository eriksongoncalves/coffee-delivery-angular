import { ApplicationConfig, LOCALE_ID } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideHttpClient } from '@angular/common/http'

import { registerLocaleData } from '@angular/common'
import localePt from '@angular/common/locales/pt'
registerLocaleData(localePt)

import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), { provide: LOCALE_ID, useValue: 'pt-BR' }]
}
