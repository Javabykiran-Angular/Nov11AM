import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-customservice',
  templateUrl: './customservice.component.html',
  styleUrls: ['./customservice.component.css']
})
export class CustomserviceComponent implements OnInit {

  productlist:string[]=[];
  compoarrobj=[];

  constructor(private service:ProductService) { 
    // let service=new ProductService();
    // this.productlist=service.getProductList();
    console.log("U are in Constructor..");
  }

  ngOnInit() {
    console.log("U are in ngOnInit() method");
    this.GetAllData();

  }

  GetAllData(){
    this.productlist=this.service.getProductList();
    this.compoarrobj=this.service.getarrobj();
  }


}
