class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
       
    }
 
}
class Milk extends Product{
    constructor(milk1,milk2,milk3,name,price){
        super(name,price,milk1,milk2,milk3);
        this.milk2 = milk2;
        this.milk1 = milk1;
        this.milk3 =milk3;
    }

    FatPercent(milk1,milk2,milk3){
    
         var arr=[]
        
        arr.push(milk1,milk2,milk3)
        return(milk1 +milk2+ milk3 )/ 3
    }
   
}
const milks=new Milk('af-203','dev',99);
console.log(milks.FatPercent(23,24,25))
