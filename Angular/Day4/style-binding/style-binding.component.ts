import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  colorname:string='red';
  colorname1:string='green';
  rating:number=31;
  myobj={
    color:'blue',
    fontStyle:'italic',
    "font-family":'Courier New'
  }
  constructor() { }

  ngOnInit() {
  }

}
