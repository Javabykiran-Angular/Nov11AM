import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdirective',
  templateUrl: './ifdirective.component.html',
  styleUrls: ['./ifdirective.component.css']
})
export class IfdirectiveComponent implements OnInit {

  rating:number=21;
  rating1:number=3;
  rating2:number=34;
  constructor() { }

  ngOnInit() {
  }

}
