import { SettingsService } from './settings.service';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],

providers: [ /* { provide: LOCALE_ID, useValue: 'en-US' } */
SettingsService,
{
  provide: LOCALE_ID,
  deps: [SettingsService],
  useFactory: (settingService: { getLocale: () => any; }) => settingService.getLocale()
}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
