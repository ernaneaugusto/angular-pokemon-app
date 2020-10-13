import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './views/home/home.module';
import { HeaderComponent } from './components/layout/header/header.component';
import { BannerIntroComponent } from './components/layout/banner-intro/banner-intro.component';
import { SearchComponent } from './components/layout/search/search.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerIntroComponent,
    SearchComponent,
    DashboardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
