import { ProductService } from './../../service/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-button-block',
  templateUrl: './button-block.component.html',
  styleUrls: ['./button-block.component.scss'],
})
export class ButtonBlockComponent implements OnInit {
  @Input() product: Product = new Product();
  constructor(private productService: ProductService) {}

  onSave(product: Product) {
    this.productService.updateOne(this.product);
  }

  onDelete(product: Product) {
    this.productService.deleteOne(this.product);
  }

  ngOnInit(): void {}
}
