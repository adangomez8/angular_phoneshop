import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Phone } from './phone-list/Phone';
import { tap, map } from 'rxjs/operators';


const URL= 'https://60bfc00bcd4f330017b9cc20.mockapi.io/phones';

@Injectable({
  providedIn: 'root'
})
export class PhoneDataService {

  constructor(private http: HttpClient){}

  public getAll(): Observable<Phone[]>{
    return this.http.get<Phone[]>(URL)
              .pipe(
                tap(  (phones: Phone[]) => phones.forEach(phone => phone.quantity = 0) )
                );
  }
}



