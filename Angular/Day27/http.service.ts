import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private Baseurl:string="http://localhost:8080/api/"
  constructor(private http:HttpClient) { }

  getAllEmployee(){
   return (  this.http.get(this.Baseurl+"getallemployee") );
  }

  loginCheck(obj){
   return ( this.http.post(this.Baseurl+"logincheck",obj));
  }

  getAllCountry(){
    return (this.http.get(this.Baseurl+"getallcountry"))
  }

  updateEmployee(obj){
    return (this.http.put(this.Baseurl+"updateemployee",obj,{responseType:'text'}));
  }
  addEmployee(obj){
    return (this.http.post(this.Baseurl+"addemployee",obj,{responseType:'text'}))
  }

  getEmpById(id){
    return (this.http.get(this.Baseurl+"getemployeebyid/"+id));
  }

  deleteEmployee(id){
    return (this.http.delete(this.Baseurl+"deleteemployee/"+id,{responseType:'text'}))
  }

}
