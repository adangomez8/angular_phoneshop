import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { Phone } from './phone-list/Phone';


@Injectable({
  providedIn: 'root'
})
export class PhoneCartService {

  private _cartList: Phone[] = [];

  cartList: BehaviorSubject<Phone[]> = new BehaviorSubject<Phone[]>([]);


  constructor() { }

  addToCart(phone: Phone){
    let item = this._cartList.find((v1)=>v1.code==phone.code)
    if (!item){
      this._cartList.push( {... phone})
    } else{
      item.quantity += phone.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList)
  }

}
