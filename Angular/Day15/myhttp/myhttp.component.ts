import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-myhttp',
  templateUrl: './myhttp.component.html',
  styleUrls: ['./myhttp.component.css']
})
export class MyhttpComponent implements OnInit {
  posts:any[]=[];

  ishidden:boolean=true;
  id:number=0;
  title:string='';
  body:string='';


  constructor(private service:PostService) { }

  ngOnInit() {
    
    this.getpost();

  }

  getpost(){
    this.service.getpost()
    .subscribe((response)=>{
      console.log(response);
      this.posts=(<any> response);
    },(myerror)=>{
      alert("Invalid URL "+myerror.status);
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

  OnUpdate(item){
    this.ishidden=false;

    this.id=item.id;
    this.title=item.title;
    this.body=item.body;

  }

  OnFinalUpdate(){
      let obj={
        id:this.id,
        title:this.title,
        body:this.body
      }

      this.service.UpdatePostData(obj)
      .subscribe((response)=>{
        console.log(response);
        this.id=0;
        this.title='';
        this.body="";
        this.ishidden=true;

      })    

  }

  onDelete(id){
    this.service.DeletePostData(id)
    .subscribe((response)=>{
      console.log(response);
    })
  }



}
