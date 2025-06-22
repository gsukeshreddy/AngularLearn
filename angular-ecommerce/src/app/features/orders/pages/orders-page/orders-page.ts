import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.html',
  styleUrl: './orders-page.css',
})
export class OrdersPage implements OnInit {
  ngOnInit(): void {
    console.log('Orders page is initialized');
  }
}
