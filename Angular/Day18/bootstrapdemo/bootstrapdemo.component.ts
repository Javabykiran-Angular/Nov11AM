import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrapdemo',
  templateUrl: './bootstrapdemo.component.html',
  styleUrls: ['./bootstrapdemo.component.css']
})
export class BootstrapdemoComponent implements OnInit {

  arrobj=[
    {
      product:'+One Plus',
      description: "Best Product",
      price:30000
    },
    {
      product:'Samsung',
      description: "Good Product",
      price:25000
    },
    {
      product:'Motorolla',
      description: "Awsome Product",
      price:25100
    },
    {
      product:'LG',
      description: "lifes Good",
      price:35100
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
