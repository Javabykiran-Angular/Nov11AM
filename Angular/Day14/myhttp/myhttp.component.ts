import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-myhttp',
  templateUrl: './myhttp.component.html',
  styleUrls: ['./myhttp.component.css']
})
export class MyhttpComponent implements OnInit {
  posts:any[]=[];
  constructor(private service:PostService) { }

  ngOnInit() {
    this.service.getpost()
    .subscribe((response)=>{
      console.log(response);
      this.posts=(<any> response);
    })

  }

  onSubmit(mytitle,mybody){
    let obj={
      title:mytitle.value,
      body:mybody.value
    }

    this.service.SendPostData(obj)
    .subscribe((response)=>{
      console.log(response);
      mytitle.value="";
      mybody.value="";
    })
  }



}
