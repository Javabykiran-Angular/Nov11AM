import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course=['Angular 8 ','React Js','Vue Js','JSP'];

  product=[
    {
      name:'Samsung',
      description:'Product is good',
      quantity:2,
      price:10000
    },
    {
      name:'Motorolla',
      description:'Product is Best',
      quantity:1,
      price:15000
    },
    {
      name:'nokia',
      description:'Product is Average',
      quantity:3,
      price:20000
    },
    {
      name:'LG',
      description:'Product is lifes Good',
      quantity:1,
      price:20000
    }
  ];

  selected:string='';
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(item){
    console.log("Mouse Over Event is Occur!!!");
    this.selected=item.name;

  }
  onMouseOut(){
    this.selected='';
  }

}
