import { Product } from './../../model/product';
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

@Input() products: Product[] = []
  public phrase: string = ''

  constructor() {
  }

  ngOnInit(): void {
  }

}