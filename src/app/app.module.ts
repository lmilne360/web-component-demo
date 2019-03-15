import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ButtonComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const btn = createCustomElement(ButtonComponent, {injector});
    customElements.define('custom-button', btn);
  }

  ngDoBootstrap() {}
 }
