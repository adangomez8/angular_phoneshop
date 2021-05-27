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
    clearance: false,
  },
  {
    photo:  "assets/img/oneVision.jpg",
    code: 10002,
    brand: "Motorola",
    model: "One Vision",
    price: 45000,
    stock: 32,
    clearance: true,
  },
  {
    photo:  "assets/img/mi11Ultra.jpg",
    code: 10003,
    brand: "Xiaomi",
    model: "Mi 11 Ultra",
    price: 65000,
    stock: 0,
    clearance: false,
  },
]


  constructor() { }
 
  ngOnInit(): void {
  }

}
