import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  @Input() parentdata={
    id:0,
      name:'',
      departmentit:'',
      status:'',
      phoneno:0,
      country:{
        cid:0,
        cname:''
      },
      createddtm:0,
      createdby:'',
      updateddtm:0,
      updatedby:''
  };
  issubmitDissabled:boolean=true;
  allCountry=[];
  constructor(private service:HttpService) { }

  ngOnInit() {
    this.GetAllCountry();
  }

  GetAllCountry(){
    this.service.getAllCountry()
    .subscribe((response)=>{
      this.allCountry=(<any>response);
    });
  }

  onupdate(){

    //update date
    this.parentdata.updateddtm=Date.now();
    // console.log(this.parentdata);
    // console.log("cid "+this.parentdata.country.cid);
    // console.log("update date "+this.parentdata.updateddtm);

    this.service.updateEmployee(this.parentdata)
    .subscribe((response)=>{
      console.log(response);
      this.issubmitDissabled=false;
    })

   

  }


}
