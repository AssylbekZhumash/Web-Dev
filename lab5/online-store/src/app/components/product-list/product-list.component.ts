import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() likeProduct = new EventEmitter<number>();

  openedShareId: number | null = null;

  setOpenedShare(id: number | null) {
    this.openedShareId = id;
  }

  onDelete(productId: number) {
    if (this.openedShareId === productId) {
      this.openedShareId = null;
    }
    this.deleteProduct.emit(productId);
  }

  onLike(productId: number) {
    this.likeProduct.emit(productId);
  }
}