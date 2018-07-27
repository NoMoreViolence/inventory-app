import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Product } from '../product.model'

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent {
  @Input() productList: Product[]

  @Output() ProductSelected: EventEmitter<Product>

  private currentProduct: Product

  constructor() {
    this.ProductSelected = new EventEmitter()
  }

  clicked(product: Product): void {
    console.log(this.productList)
    this.currentProduct = product
    this.ProductSelected.emit(product)
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false
    }
    return product.sku === this.currentProduct.sku
  }
}
