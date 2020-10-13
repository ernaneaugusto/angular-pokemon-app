import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerIntroComponent } from './banner-intro/banner-intro.component';
import { SearchComponent } from './search/search.component';

const ROUTE: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    BannerIntroComponent,
    SearchComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE),
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
