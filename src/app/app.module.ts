import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './views/home/home.module';
import { HeaderComponent } from './components/layout/header/header.component';
import { BannerIntroComponent } from './components/layout/banner-intro/banner-intro.component';
import { SearchComponent } from './components/layout/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerIntroComponent,
    SearchComponent
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
