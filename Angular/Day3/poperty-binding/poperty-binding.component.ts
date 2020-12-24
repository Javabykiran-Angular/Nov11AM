import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poperty-binding',
  templateUrl: './poperty-binding.component.html',
  styleUrls: ['./poperty-binding.component.css']
})
export class PopertyBindingComponent implements OnInit {

  imgUrl='../../assets/Desert.jpg';
  name:string='Sumit Raokhande';
  ishidden:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
