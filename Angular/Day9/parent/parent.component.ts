import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  datarecived:string='';
  datarecived1:string='';
  strdata:string="Data from Parent..";

  arrobj=[
    {
      id:1,
      name:'samsung',
      price:10000
    },
    {
      id:12,
      name:'LG',
      price:12000
    },
    {
      id:13,
      name:'Motorolla',
      price:20000
    },
    {
      id:14,
      name:'One Plus',
      price:30000
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  onCustomEvent(value){
    this.datarecived1=value;
  }

}
