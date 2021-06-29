import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { PhoneCartService } from '../phone-cart.service';
import { Phone } from '../phone-list/Phone';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Phone[]>;
  constructor(private cart: PhoneCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
