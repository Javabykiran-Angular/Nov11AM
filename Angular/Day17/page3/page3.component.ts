import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
id1:number=0;
username1:string='';
  constructor(private routes:ActivatedRoute) { }

  ngOnInit() {
    this.routes.paramMap
    .subscribe((param)=>{
        this.id1=+param.get('id');
        this.username1=param.get('username');
    })
  }

}
