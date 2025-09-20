function car (make,model,year){
    this.make = make
    this.model = model
    this.year 
}
const auto  = new car ('honda','city',2006)
console.log(auto instanceof car);
console.log(auto instanceof Object);
