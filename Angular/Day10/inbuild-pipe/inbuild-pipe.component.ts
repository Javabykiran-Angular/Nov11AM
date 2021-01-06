import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  strname:string='Sumit raokhande';
  num1:number=234.34566789;
  mydate=new Date();
  str1:string='sumit';
  sym:string=''
  constructor() { }

  ngOnInit() {
    this.sym=getCurrencySymbol('INR','wide','en');
  }

}
