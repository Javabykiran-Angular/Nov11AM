import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  EmpData:any[]=[
    {
      id: 1,
      country: {
          cid: 1,
          cname: "india"
      },
      name: "sneha oneill",
      phoneno: "9177752612",
      departmentit: "Development",
      status: "active",
      createddtm: "2020-01-01T05:00:00.000+00:00",
      createdby: "freya",
      updateddtm: "2020-07-01T04:00:00.000+00:00",
      updatedby: "neeord"
  },
  {
    id: 10,
    country: {
        cid: 2,
        cname: "USA"
    },
    name: "XYZ",
    phoneno: "7752612560",
    departmentit: "Marketing",
    status: "active",
    createddtm: "2020-01-01T05:00:00.000+00:00",
    createdby: "Admin",
    updateddtm: "2020-07-01T04:00:00.000+00:00",
    updatedby: "Sumit"
},
{
  id: 10,
  country: {
      cid: 3,
      cname: "Germany"
  },
  name: "PQR",
  phoneno: "7752612560",
  departmentit: "Developer",
  status: "Inactive",
  createddtm: "2020-01-01T05:00:00.000+00:00",
  createdby: "Admin",
  updateddtm: "2020-07-01T04:00:00.000+00:00",
  updatedby: "Sumit"
},
{
  id: 8,
  country: {
      cid: 1,
      cname: "India"
  },
  name: "ABC",
  phoneno: "7752612560",
  departmentit: "Administarator",
  status: "active",
  createddtm: "2020-01-01T05:00:00.000+00:00",
  createdby: "Admin",
  updateddtm: "2020-07-01T04:00:00.000+00:00",
  updatedby: "Sumit"
},
{
  id: 12,
  country: {
      cid: 1,
      cname: "India"
  },
  name: "ABC1",
  phoneno: "7752612560",
  departmentit: "Networking",
  status: "active",
  createddtm: "2020-01-01T05:00:00.000+00:00",
  createdby: "Admin",
  updateddtm: "2020-07-01T04:00:00.000+00:00",
  updatedby: "Sumit"
},
{
  id: 5,
  country: {
      cid: 1,
      cname: "India"
  },
  name: "Sumit",
  phoneno: "9960556397",
  departmentit: "Developer",
  status: "Suspended",
  createddtm: "2020-01-01T05:00:00.000+00:00",
  createdby: "Admin",
  updateddtm: "2020-07-01T04:00:00.000+00:00",
  updatedby: "Kiran"
},
{
  id: 15,
  country: {
      cid: 1,
      cname: "India"
  },
  name: "Kiran",
  phoneno: "7752612560",
  departmentit: "Management",
  status: "Inactive",
  createddtm: "2020-01-01T05:00:00.000+00:00",
  createdby: "Super Admin",
  updateddtm: "2020-07-01T04:00:00.000+00:00",
  updatedby: "Kiran"
}

  ];
  constructor(private service:HttpService,private router:Router) { }

  ngOnInit() {
    this.GetAllEmployee();
  }

  GetAllEmployee(){
    // this.service.getAllEmployee()
    // .subscribe((response)=>{
    //   this.EmpData=(<any>response);
    // })
  }
  onAddEmployee(){
    this.router.navigate(['/AddEmployee']);
  }
  onUpdateEmployee(){

  }
  onDelete(){

  }
  onChangeStatus(){

  }

}
