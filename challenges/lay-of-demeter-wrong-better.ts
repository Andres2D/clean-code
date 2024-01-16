// First solution

// class Customer {
//   lastPurchase: any;

//   getLastPurchaseDate() {
//     return this.lastPurchase.date;
//   }
// }

// class DeliveryJob {
//   customer: Customer;
//   warehouse: any;

//   constructor(customer: Customer, warehouse: any) {
//     this.customer = customer;
//     this.warehouse = warehouse;
//   }

//   deliverLastPurchase() {
//     // const date = this.customer.lastPurchase.date;
//     const date = this.customer.getLastPurchaseDate();
//     this.warehouse.deliverPurchasesByDate(this.customer, date);
//   }
// }

// Second Solution
// Tell, Don't Ask

class DeliveryJob {
  customer: any;
  warehouse: any;

  constructor(customer: any, warehouse: any) {
    this.customer = customer;
    this.warehouse = warehouse;
  }

  deliverLastPurchase() {
    // const date = this.customer.lastPurchase.date;
    const date = this.customer.getLastPurchaseDate();
    // this.warehouse.deliverPurchasesByDate(this.customer, date);
    this.warehouse.deliverPurchase(this.customer.lastPurchase);
  }
}