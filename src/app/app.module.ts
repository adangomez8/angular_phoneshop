import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { FormsModule } from '@angular/forms';
import { PhoneshopContactComponent } from './phoneshop-contact/phoneshop-contact.component';
import { PhoneshopPhonesComponent } from './phoneshop-phones/phoneshop-phones.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneshopContactComponent,
    PhoneshopPhonesComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
