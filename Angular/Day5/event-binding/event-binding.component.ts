import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  count:boolean=false;
  name:string='';
  name1:string='';
  str1:string='';
  num1:number=0;
  result:number=0;
  result1:number=0;
  num2:number=10;
  num3:number=20;
  name2:string="Sumit Raokhande";
  ishidden:boolean=true;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.count==false){
      console.log("Event Occurs....");
      this.count=true;
    }
    
  }

  onClick1(){
    this.name="Sumit Raokhande";
  }
  onClick2(){
    this.name1="Angular 8";
  }
  onClickDetails(str:string,num1:number){
    this.str1=str;
    this.num1=num1;
    console.log("String Value is "+str);
    console.log("Number Value is "+num1);

  }
  OnDisplay(){
    this.ishidden=false;
  }

  onInfo(myevent){
    console.log(myevent);
    console.log("Value Data is "+myevent.target.value);
  }

}
