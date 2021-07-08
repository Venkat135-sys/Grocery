import { Component,Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent {

  @Input()  prodobj:Product;

}
