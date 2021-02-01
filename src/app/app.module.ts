import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OptionTwoComponent } from './option-two/option-two.component';
import { MainPageComponent } from './main-page/main-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { arrowLeftRight, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { ReactiveFormsModule } from '@angular/forms';

const icons = {
  arrowLeftRight
};

@NgModule({
  declarations: [
    AppComponent,
    OptionTwoComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule.pick(icons),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
