import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { ProductListComponent } from '../product-list/product-list.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
