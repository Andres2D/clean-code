type PurchaseBad = any;

let LogisticsBad: any;

class DeliveryBad {
  private purchase: PurchaseBad;

  constructor(purchase: PurchaseBad) {
    this.purchase = purchase;
  }

  deliverProduct() {
    if (this.purchase.deliveryType === 'express') {
      LogisticsBad.issueExpressDelivery(this.purchase.product);
    } else if (this.purchase.deliveryType === 'insured') {
      LogisticsBad.issueInsuredDelivery(this.purchase.product);
    } else {
      LogisticsBad.issueStandardDelivery(this.purchase.product);
    }
  }

  trackProduct() {
    if (this.purchase.deliveryType === 'express') {
      LogisticsBad.trackExpressDelivery(this.purchase.product);
    } else if (this.purchase.deliveryType === 'insured') {
      LogisticsBad.trackInsuredDelivery(this.purchase.product);
    } else {
      LogisticsBad.trackStandardDelivery(this.purchase.product);
    }
  }
}
