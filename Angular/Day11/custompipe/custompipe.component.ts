import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  strdetails:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ut quas illo laboriosam minima tempore magni iste similique inventore, quidem quisquam tempora autem neque libero atque, provident molestiae laudantium sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ut quas illo laboriosam minima tempore magni iste similique inventore, quidem quisquam tempora autem neque libero atque, provident molestiae laudantium sunt?";
  constructor() { }

  ngOnInit() {
  }
  

}
