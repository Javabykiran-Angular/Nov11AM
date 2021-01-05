import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output()  DataFromChild=new EventEmitter();

  strdata:string="Data from Child!!!!!";
  constructor() { }

  ngOnInit() {
  }

  OnClick(){
    this.DataFromChild.emit(this.strdata)
  }

}
