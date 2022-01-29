import { ProductService } from '../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss'],
})
export class DataEditorComponent implements OnInit {
  keys = Object.keys(new Product());
  products$: Observable<Product[]> = this.productService.getAll();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
}
