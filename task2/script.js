class Device{
    constructor(Brand,Model,Screensize,Batterylevel,Price,SalePrice,DiscountPercentage,Salecount)
    {
      this.Brand = Brand;
      this.Model = Model;  
      this.Screensize = Screensize;
      this.Batterylevel = Batterylevel;
      this.Price = Price;
      this.SalePrice = SalePrice;
      this.DiscountPercentage = DiscountPercentage;
      this.Salecount = Salecount;
      
    
    }
 
    CalculateProfit(){
        if(this.SalePrice>this.Price)
        {
            var money= this.SalePrice-(this.Price*this.DiscountPercentage/100)
            console.log(money+` `+"gelir elde etdi")
          
        }
     
    }
    DisplayBatterryLevel(){
        return this.Batterylevel
    }
    DisplayDetails(){
        return this.Screensize+ ` `+this.Model + ` `+this.Brand
    }
    
    
   
}
class Phone extends Device{
    constructor(Brand,Model,Screensize,Batterylevel,Price,SalePrice,DiscountPercentage,Salecount, isSmart ){
        super(Brand,Model,Screensize,Batterylevel,Price,SalePrice,DiscountPercentage,Salecount, isSmart )
        this.isSmart=isSmart;
       if(isSmart==true){
        console.log(true)
       }
       else{
        console.log(false)
       }
    
    }
   
}

class Laptop extends Device{
    constructor(Brand,Model,Screensize,Batterylevel,Price,SalePrice,DiscountPercentage,Salecount,  isRGBkeyboard){
        super(Brand,Model,Screensize,Batterylevel,Price,SalePrice,DiscountPercentage,Salecount, isRGBkeyboard)
        this.isRGBkeyboard = isRGBkeyboard;
    }
}

let tel= new Phone("Xiaomi","Mi","14 inches","56wh",2500,3000,10,428,true )
let  lap= new Laptop("Xiaomi","Mi","14 inches","56wh",2500,2600,20,428,true )


let product=[]
product.push(tel,lap);
console.log(product);
console.log(tel.CalculateProfit());
console.log(tel.DisplayDetails());
console.log(tel.DisplayBatterryLevel());


