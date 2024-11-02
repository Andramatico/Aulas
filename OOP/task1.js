class cars{
    brand;
    model;
    yearOfManufacturing;
    price;
    mileage;
    constructor(brand, model, yearOfManufacturing,price,mileage){
        this.brand = brand;
        this.model = model;
        this.yearOfManufacturing = yearOfManufacturing;
        this.price=price;
        this.mileage=mileage;
        
    } 

   updatePrice(){

    }

    newMileage (){

    }

    carInfo(){
        console.log(this.brand,this.model,this.yearOfManufacturing,this.price,this.mileage)
    }

}