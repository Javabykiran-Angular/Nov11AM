import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  
  incorrect:string='';
  constructor(private service:HttpService,private router:Router) { }
  
  ngOnDestroy(): void {
    document.body.className="";
  }

  ngOnInit() {
    document.body.className="bg-img";
  }
  onSubmit(f){
    console.log("Email Id "+f.value.email);
    console.log("Email Id "+f.value.password);
    let obj={
      email:f.value.email,
      password:f.value.password
    }
    this.service.loginCheck(obj)   
    .subscribe((response)=>{

      console.log(response);
      let msg=(<string>response.msg);
      console.log("Messge is "+msg);
      if(msg==="Valid user"){

        this.router.navigate(['/home']);

      }else{
        this.incorrect=msg;
      }

    }) 


  }

}
