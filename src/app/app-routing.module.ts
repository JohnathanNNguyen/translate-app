import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { OptionTwoComponent } from './option-two/option-two.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'page2', component: OptionTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
