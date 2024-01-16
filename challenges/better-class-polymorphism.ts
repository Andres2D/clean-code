type Purchase = any;

let Logistics: any;

interface Delivery {
  deliverProduct(): void;
  trackProduct(): void;
}

class DeliveryImplementation {
  protected purchase: Purchase;

  constructor(purchase: Purchase) {
    this.purchase = purchase;
  }
}

class ExpressDeliver extends DeliveryImplementation {
  deliverProduct() {
    Logistics.issueExpressDelivery(this.purchase.product);
  }

  trackProduct() {
    Logistics.trackExpressDelivery(this.purchase.product);
  }
}

class InsuredDelivery extends DeliveryImplementation {
  deliverProduct() {
    Logistics.issueInsuredDelivery(this.purchase.product);
  }

  trackProduct() {
    Logistics.trackInsuredDelivery(this.purchase.product);
  }
}

class StandardDelivery extends DeliveryImplementation {
  deliverProduct() {
    Logistics.issueStandardDelivery(this.purchase.product);
  }

  trackProduct() {
    Logistics.trackStandardDelivery(this.purchase.product);
  }
}

function createDelivery(purchase: string) {
  if (purchase === 'express') {
    delivery = new ExpressDeliver({});
  } else if (purchase === 'insured') {
    delivery = new InsuredDelivery({});
  } else {
    delivery = new StandardDelivery({});
  }
  return delivery;
}

let delivery: Delivery = createDelivery('');

delivery.deliverProduct();

