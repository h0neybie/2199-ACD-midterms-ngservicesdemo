import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

 getproducts (){
    return [{ 
      prodid:"P-101",
    prodN: 'Logitech Mouse',
    desc: '6 Button Mechanical Mouse',
    price: 899,
  },
  {
    prodid:"P-102",
    prodN: 'JBL BT Speaker',
    desc: 'Waterproof Radio 360 Surround',
    price: 1099,
  },
  
  {
    prodid:"P-103",
    prodN: 'Mechanical Keyboard',
    desc: 'Hot-swappable RGB Backlit',
    price: 2395,
  },
  {
    prodid:"P-104",
    prodN: 'Oculus Meta',
    desc: 'All-in-one Gaming Headset',
    price: 22450,
  },
  ]
}
  
}
