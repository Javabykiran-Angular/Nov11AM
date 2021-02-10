import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  empobj:Employee={
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
  constructor(private route : ActivatedRoute,
              private service:HttpService) { }

  ngOnInit() {
    this.getEmplaoyeeDetails();
  }

  getEmplaoyeeDetails(){
    this.route.paramMap
    .subscribe((param)=>{
      this.empobj.id=+param.get("id");
      this.GetEmployeeById(this.empobj.id)

    });


  }

  GetEmployeeById(id:number){
    
    this.service.getEmpById(id)
    .subscribe((response)=>{
      this.empobj=(<any>response)
      console.log(this.empobj);
    })

  }

}
