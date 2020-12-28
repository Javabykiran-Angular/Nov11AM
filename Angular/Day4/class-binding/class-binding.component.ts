import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  myclass:string="success";
  rating:number=31;
  rating1:number=21;
  iserror:boolean=false;
  isSpecial:boolean=true;

  myobj={
    "success":this.iserror,
    "danger" : !this.iserror,
    "special" : this.isSpecial
  }
  

  constructor() { }

  ngOnInit() {
  }

}
