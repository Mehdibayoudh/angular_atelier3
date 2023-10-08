import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainInvoiceComponentComponent} from "./main-invoice-component/main-invoice-component.component";
import {InvoiceComponentComponent} from "./invoice-component/invoice-component.component";

const routes: Routes = [
  {
    path:'InvoiceManagement',component:MainInvoiceComponentComponent
  } ,
  {
    path:'invoice/:id/:active',component:InvoiceComponentComponent
  },
  {
    path:'invoice',component:InvoiceComponentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
