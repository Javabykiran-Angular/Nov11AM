import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-part2',
  templateUrl: './event-binding-part2.component.html',
  styleUrls: ['./event-binding-part2.component.css']
})
export class EventBindingPart2Component implements OnInit {
  result:string='';
  result1:number=0;
  name:string='';

  constructor() { }

  ngOnInit() {
  }

  onClick(value){
    console.log(value);
  }
  onClick1(myinput){
    console.log("======== "+myinput.value);
    myinput.style.background='red';
    myinput.style.color='white';

  }

  onSquare(value){
    this.result=''+(value*value);
    this.result1=value*value;
  }
  onChange(myinput){
    console.log("Event Occur!!!");

    myinput.style.background="green";

  }
  onKeyUp(){
    console.log("Key Up Event Occur!!!");
  }
  onKeyDown(){
    console.log("Key Down Event Occur!!!");    
  }

  onAlert(){
    alert("On Alert Method Call!!!!");
  }
  
}
