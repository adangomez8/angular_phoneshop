import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneshopContactComponent } from './phoneshop-contact/phoneshop-contact.component';
import { PhoneshopPhonesComponent } from './phoneshop-phones/phoneshop-phones.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'phones',
    pathMatch: 'full'
  },
  {path: 'phones',
    component: PhoneshopPhonesComponent
  },
  {path: 'contact',
    component: PhoneshopContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
