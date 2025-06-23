import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  inject,
  Injector,
  input,
  OnInit,
  runInInjectionContext,
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
  // Convert productsList to a signal for reactivity if needed
  productSignal = signal(this.productsList);
  private injector = inject(Injector);

  ngAfterViewInit(): void {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        // Sync input signal to local signal
        this.productSignal.set(this.productsList);

        const products = this.productSignal();
        if (products.length > 0 && this.carouselEl?.nativeElement) {
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
    });
  }
}
