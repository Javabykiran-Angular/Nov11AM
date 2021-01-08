
export class ProductService{
    private product=['Samsung','Motorolla','Nokia','LG'];

    private arrobj=[
        {
            name:'Sumit Raokhande',
            id:1,
            role:'Developer'
        },
        {
            name:'Kiran Raokhande',
            id:2,
            role:'owner'

        },
        {
            name:'Spruha Raokhande',
            id:6,
            role:'Admin'

        }
    ]


    getProductList(){
        return this.product;
    }

    getarrobj(){
        return this.arrobj;
    }


}