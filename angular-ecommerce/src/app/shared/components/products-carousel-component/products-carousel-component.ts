import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  input,
  signal,
  ViewChild,
} from '@angular/core';
import { Product } from '../../../features/product/models/product';

declare var bootstrap: any;

@Component({
  selector: 'app-products-carousel-component',
  imports: [],
  templateUrl: './products-carousel-component.html',
  styleUrl: './products-carousel-component.css',
})
export class ProductsCarouselComponent implements AfterViewInit {
  productsList = input<Product[]>([]);
  @ViewChild('carouselEl') carouselEl!: ElementRef;

  private carouselInstance: any;

  ngAfterViewInit(): void {
    // Convert productsList to a signal for reactivity if needed
    const productSignal = signal(this.productsList);

    effect(() => {
      if (productSignal().length > 0 && this.carouselEl?.nativeElement) {
        if (!this.carouselInstance) {
          this.carouselInstance = new bootstrap.Carousel(
            this.carouselEl.nativeElement,
            {
              interval: 3000,
              ride: 'carousel',
              wrap: true,
            }
          );
        }
      }
    });
  }
}
