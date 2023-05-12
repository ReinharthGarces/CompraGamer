import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { Product } from './product/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-CompraGamer';
  http = inject(HttpClient);
  products: Product[] = [];

  changeTitle() {
    this.title = 'CompraGamer';
  }

  ngOnInit() {
    this.http.get<Product[]>("https://static.compragamer.com/test/productos.json")
    .subscribe((data) => {
      this.products = data;
    });
  }
}
