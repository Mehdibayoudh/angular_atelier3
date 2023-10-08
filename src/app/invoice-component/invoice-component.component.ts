import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {InvoiceListComponentComponent} from "../invoice-list-component/invoice-list-component.component";
import {Invoice} from "../Model/invoice";

@Component({
  selector: 'app-invoice-component',
  templateUrl: './invoice-component.component.html',
  styleUrls: ['./invoice-component.component.css']
})
export class InvoiceComponentComponent implements OnInit{
facture: Invoice|undefined;
  constructor(private ar:ActivatedRoute) {
  }

  ngOnInit() {
    //console.log(this.ar.snapshot)
    let id = this.ar.snapshot.queryParams['id'];
    this.facture= InvoiceListComponentComponent.listF.find((f)=>
      f.idFacture==id
    )
  }
}
