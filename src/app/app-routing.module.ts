import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { option } from 'ngx-bootstrap-icons';
import { MainPageComponent } from './main-page/main-page.component';
import { OptionTwoComponent } from './option-two/option-two.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: '', component: OptionTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
