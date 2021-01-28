import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private Baseurl:string="http://localhost:8080/api/"
  constructor(private http:HttpClient) { }

  getAllEmployee(){
   return (  this.http.get(this.Baseurl+"getemployee") );
  }


}
