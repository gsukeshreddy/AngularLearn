import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-page',
  imports: [],
  templateUrl: './product-list-page.html',
  styleUrl: './product-list-page.css',
})
export class ProductListPage implements OnInit {
  ngOnInit(): void {
    console.log('Productlist page is initialized');
  }
}
