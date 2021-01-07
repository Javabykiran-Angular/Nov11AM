import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"summary"
})
export class SummaryPipe implements PipeTransform {
    // transform(value: any,minlength:number=0,maxlength:number=10) {
    transform(value: any,minlength?:number,maxlength?:number) {

        if(value==null){
            return value;
        }

        let temp=(<string> value);
        
        
        //return (temp.substring(0,20)+" ...");

        let startindex=minlength?minlength:0;
        let endindex=maxlength?maxlength:20;

        return (temp.substring(startindex,endindex)+" ...");


    }


}