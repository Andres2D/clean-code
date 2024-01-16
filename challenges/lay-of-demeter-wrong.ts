class DeliveryJobWrong {
  customer: any;
  warehouse: any;

  constructor(customer: any, warehouse: any) {
    this.customer = customer;
    this.warehouse = warehouse;
  }

  deliverLastPurchase() {
    // Violation of law of demeter: we are accessing to a date that which is part of 
    // some other data that is stored in some other place.
    const date = this.customer.lastPurchase.date; 
    this.warehouse.deliverPurchasesByDate(this.customer, date);
  }
}
