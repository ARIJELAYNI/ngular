import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import {createCustomElement} from '@angular/elements'
@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector){
    const el = createCustomElement(GreeterComponent, {injector:injector});
    customElements.define('app-greeter',el)
  }
 }
