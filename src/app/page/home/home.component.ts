import { ConfigService } from './../../service/config.service';
import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[]

  constructor( public configService: ConfigService,private productService: ProductService) {
    this.products = productService.getAll();
  }

  ngOnInit(): void {
  }

}
