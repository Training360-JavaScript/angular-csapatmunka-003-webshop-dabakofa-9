import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product = new Product();
  buttonText: string = 'Megnéz';
  path: string = './../../assets/covers/';
  imageWithPath:string = '';

  constructor() { }

  ngOnInit(): void {
    this.imageWithPath = this.path+this.product.image;
  }

}
