import { Component, Input, OnInit } from '@angular/core';
import { Phone } from '../phone-list/Phone';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() {}

  @Input()
  phone: Phone;

  ngOnInit(): void {
  }


  Upquantity(phone: Phone): void {
    if (phone.quantity < phone.stock)
    phone.quantity++;
  }

  Downquantity(phone: Phone): void {
    if(phone.quantity>0)
    phone.quantity--;
  }

  changeQuantity(event: { key: any; }, phone: Phone): void {
    console.log(event.key);
  }
}
