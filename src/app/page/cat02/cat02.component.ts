import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss'],
})
export class Cat02Component implements OnInit {
  products: Product[]
  highlighted: Product[];

constructor( private productService: ProductService) {
    this.products = productService.getAll();
    this.highlighted = this.products.slice();
  }

  ngOnInit(): void {}
}
