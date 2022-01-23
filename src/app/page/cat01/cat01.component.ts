import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {
    products: Product[]
    highlighted: Product[];

  constructor( private productService: ProductService) {
      this.products = productService.getAll();
      this.highlighted = this.products.slice();
  }

  ngOnInit(): void {
  }
}
