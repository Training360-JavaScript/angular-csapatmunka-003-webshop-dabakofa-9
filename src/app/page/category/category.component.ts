import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  products$: Observable<Product[]>;
  categoryId: string = '1';
  categoryName: string = '';

  constructor(
    private productService: ProductService,
    private ar: ActivatedRoute
  ) {
    this.products$ = productService.getAll();
    this.ar.params.subscribe((params) => {
      this.categoryId = params['categoryId'];
      this.categoryName = this.productService.getCategoryNameById(
        Number.parseFloat(this.categoryId)
      );
    });
  }

  ngOnInit(): void {}
}
