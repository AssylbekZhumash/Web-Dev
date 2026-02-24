import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductService } from './service/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;

  private productsCache = new Map<number, Product[]>();

  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;

    if (!this.productsCache.has(id)) {
      const copy = this.productService.getProductsByCategory(id)
        .map(p => ({...p}));
      this.productsCache.set(id, copy);
    }
    this.selectedProducts = this.productsCache.get(id)!;
  }

  handleDelete(productId: number) {
    if (this.selectedCategoryId === null) return;

    const arr = this.productsCache.get(this.selectedCategoryId);
    if(!arr) return;

    const updated = arr.filter(p => p.id !== productId);

    this.productsCache.set(this.selectedCategoryId, updated);

    this.selectedProducts = updated;
  }
}