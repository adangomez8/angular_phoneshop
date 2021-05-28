import { Component, OnInit } from '@angular/core';
import { Phone } from './Phone'

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent implements OnInit {

phones: Phone []= [
  {
    photo:  "assets/img/iPhone8Plus.jpg",
    code: 10001,
    brand: "iPhone",
    model: "8 Plus",
    price: 120000,
    stock: 9,
    quantity: 0,
  },
  {
    photo:  "assets/img/oneVision.jpg",
    code: 10002,
    brand: "Motorola",
    model: "One Vision",
    price: 45000,
    stock: 32,
    quantity: 0,
  },
  {
    photo:  "assets/img/mi11Ultra.jpg",
    code: 10003,
    brand: "Xiaomi",
    model: "Mi 11 Ultra",
    price: 65000,
    stock: 0,
    quantity: 0,
  },
]


  constructor() { }

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
}
