import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  obj={
    name:'',
    id:0,
    role:''
  }
  constructor(private routes:ActivatedRoute) { }

  ngOnInit() {
    this.routes.queryParamMap
    .subscribe((queryparam)=>{
      this.obj.name=queryparam.get('name');
      this.obj.id=+queryparam.get('id');
      this.obj.role=queryparam.get('role');
    })
  }

  
}
