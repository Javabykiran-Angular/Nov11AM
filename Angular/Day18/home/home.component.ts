import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number=9;
  myusername:string="SumitRaokhande";

  obj={
    name:'Sumit Raokhande',
    id:8,
    role:'Developer'
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onpage1(){
    this.router.navigate(['/Page1']);
  }
  onpage2(){
    this.myid=8;
    this.router.navigate(['//Page2',this.myid])
  }
  onpage3(){
    this.myid=8;
    this.myusername='javaByKiran'
    this.router.navigate(['/Page3',this.myid,this.myusername])
  }
  onfollower(){
    this.router.navigate(['/Follower']);
  }
  onqueryparam(){
    this.router.navigate(['/QueryParameter'],{queryParams:this.obj});
  }


}
