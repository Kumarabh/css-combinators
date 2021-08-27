function Customer (id,name,city,country,pincode) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.country = country;
    this.pincode = pincode;
    
    this.customerInformation = function () {
        const res = {
            id: this.id,
            name: this.name,
            city: this.city,
            country: this.country,
            pincode: this.pincode
        }
        return res;
    }
}
export {Customer}