import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from './backend.service';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular29-lab1';

  constructor(private backendService: BackendService) {}
  @ViewChild('productList')
  productList: ProductListComponent

  ngAfterViewInit(): void {
    this.productList.products = this.backendService.getProducts();
    // this.productList.products = [
    //   {
    //     name: 'ส้มโอ',
    //     price: 990
    //   },
    //   {
    //     name: 'มะพร้าวน้ำหอม',
    //     price: 500
    //   },
    //   {
    //     name: 'แตงโม',
    //     price: 1000
    //   }]
  }

}
