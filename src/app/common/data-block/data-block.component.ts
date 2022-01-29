import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-data-block',
  templateUrl: './data-block.component.html',
  styleUrls: ['./data-block.component.scss'],
})
export class DataBlockComponent implements OnInit {
  @Input() product: Product = new Product();
  @Input() keys: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
