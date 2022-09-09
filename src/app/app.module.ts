import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PedidoCaComponent } from './components/pedido-ca/pedido-ca.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    PedidoCaComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
