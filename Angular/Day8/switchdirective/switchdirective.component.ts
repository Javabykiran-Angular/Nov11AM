import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdirective',
  templateUrl: './switchdirective.component.html',
  styleUrls: ['./switchdirective.component.css']
})
export class SwitchdirectiveComponent implements OnInit {

  mycolor:string='';
  mycolor1:string='';
  myobj={
    background:'',
    color:''
  };
  constructor() { }

  ngOnInit() {
  }
  onClick(colorname){
    this.mycolor=colorname;
  }

  onClick1(colorname){
    this.mycolor1=colorname;
    this.myobj.background=colorname;
    this.myobj.color='white';
  }

}
